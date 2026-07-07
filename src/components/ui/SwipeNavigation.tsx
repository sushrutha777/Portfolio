"use client";

import { useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";

const routes = [
  "/",
  "/about",
  "/projects",
  "/experience",
  "/education",
  "/certifications",
  "/contact"
];

export default function SwipeNavigation({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const touchEndY = useRef<number | null>(null);
  
  // Minimum distance (in pixels) to be considered a swipe
  const minSwipeDistance = 50;

  useEffect(() => {
    // We only want to enable this on mobile devices roughly
    if (window.innerWidth > 768) return;

    const onTouchStart = (e: TouchEvent) => {
      touchEndX.current = null;
      touchEndY.current = null;
      touchStartX.current = e.targetTouches[0].clientX;
      touchStartY.current = e.targetTouches[0].clientY;
    };

    const onTouchMove = (e: TouchEvent) => {
      touchEndX.current = e.targetTouches[0].clientX;
      touchEndY.current = e.targetTouches[0].clientY;
    };

    const onTouchEnd = (e: TouchEvent) => {
      if (!touchStartX.current || !touchEndX.current || !touchStartY.current || !touchEndY.current) return;
      
      // Ignore swipes that started on the navbar or other horizontally scrollable elements
      if ((e.target as HTMLElement).closest('nav') || (e.target as HTMLElement).closest('.overflow-x-auto')) {
        return;
      }

      const distanceX = touchStartX.current - touchEndX.current;
      const distanceY = touchStartY.current - touchEndY.current;
      
      // Check if the swipe is mostly horizontal (X distance > Y distance)
      if (Math.abs(distanceX) > Math.abs(distanceY)) {
        const isLeftSwipe = distanceX > minSwipeDistance;
        const isRightSwipe = distanceX < -minSwipeDistance;

        if (isLeftSwipe || isRightSwipe) {
          // Find current route index, ignoring anything after a potential query string
          const currentPath = pathname.split('?')[0];
          const currentIndex = routes.indexOf(currentPath);
          
          if (currentIndex === -1) return;

          if (isLeftSwipe && currentIndex < routes.length - 1) {
            // User swiped left, go to NEXT page
            router.push(routes[currentIndex + 1]);
          } else if (isRightSwipe && currentIndex > 0) {
            // User swiped right, go to PREVIOUS page
            router.push(routes[currentIndex - 1]);
          }
        }
      }
    };

    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd);

    return () => {
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [pathname, router]);

  return <>{children}</>;
}
