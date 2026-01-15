import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.002); // Clearer fog for depth

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // --- Starfield Background (Depth Effect) ---
    const starGeometry = new THREE.BufferGeometry();
    const starCount = 4000; // Dense but subtle
    const starPos = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3); // For individual star colors
    const starVelocities = new Float32Array(starCount);

    const color1 = new THREE.Color(0xffffff); // White
    const color2 = new THREE.Color(0x2DD4BF); // Brand Teal/Cyan

    for (let i = 0; i < starCount; i++) {
      const x = (Math.random() - 0.5) * 800;
      const y = (Math.random() - 0.5) * 800;
      const z = (Math.random() - 0.5) * 800;

      starPos[i * 3] = x;
      starPos[i * 3 + 1] = y;
      starPos[i * 3 + 2] = z;

      // velocity Z (Speed up slightly for better visibility of motion)
      starVelocities[i] = 0.2 + Math.random() * 0.3;

      // Mix colors: 70% white, 30% cyan
      const mixedColor = Math.random() > 0.7 ? color2 : color1;
      starColors[i * 3] = mixedColor.r;
      starColors[i * 3 + 1] = mixedColor.g;
      starColors[i * 3 + 2] = mixedColor.b;
    }

    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    starGeometry.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

    const starMaterial = new THREE.PointsMaterial({
      vertexColors: true,
      size: 1.0, // Reduced size for a more professional, subtle look
      transparent: true,
      opacity: 1.0,
      sizeAttenuation: false, // Prevents growing when close
      blending: THREE.AdditiveBlending
    });

    const starField = new THREE.Points(starGeometry, starMaterial);
    scene.add(starField);

    // Camera Positioning
    camera.position.z = 1000;

    // --- Animation Loop ---
    const animate = () => {
      requestAnimationFrame(animate);

      const positions = starField.geometry.attributes.position.array as Float32Array;

      for (let i = 0; i < starCount; i++) {
        // Move Z towards camera
        let z = positions[i * 3 + 2];
        z += starVelocities[i];

        // Infinite loop logic
        // If star gets too close (past camera which is at 1000) or too far
        // Ideally we move particles from -Z to +Z or vice versa.
        // Let's assume camera is at 1000 looking at 0. Particles are spread.
        // We move them towards 1000.

        if (z > 1000) {
          z = -800; // Reset far behind
          // Reshuffle X/Y for variety
          positions[i * 3] = (Math.random() - 0.5) * 800;
          positions[i * 3 + 1] = (Math.random() - 0.5) * 800;
        }

        positions[i * 3 + 2] = z;
      }

      starField.geometry.attributes.position.needsUpdate = true;
      starField.rotation.z += 0.0001; // Ultra slow rotation

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (renderer.domElement && containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      starGeometry.dispose();
      starMaterial.dispose();
    };
  }, []);

  return <div ref={containerRef} className="w-full h-full" />;
};

export default ThreeScene;
