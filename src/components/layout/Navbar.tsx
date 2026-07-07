"use client";

import { motion } from "framer-motion";
import { Home, User, Briefcase, Mail, GraduationCap, Folder, Award } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "/about", icon: User },
    { name: "Projects", href: "/projects", icon: Folder },
    { name: "Experience", href: "/experience", icon: Briefcase },
    { name: "Education", href: "/education", icon: GraduationCap },
    { name: "Certifications", href: "/certifications", icon: Award },
    { name: "Contact", href: "/contact", icon: Mail },
  ];

  return (
    <div className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 w-max max-w-[95vw] sm:max-w-2xl">
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="glass rounded-full px-3 sm:px-6 py-3.5 flex items-center justify-start sm:justify-center gap-3 sm:gap-8 border border-white/5 shadow-2xl bg-[#151515]/90 backdrop-blur-md overflow-x-auto overflow-y-hidden"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <style dangerouslySetInnerHTML={{ __html: `::-webkit-scrollbar { display: none; }` }} />
        {navLinks.map((link) => {
          const isActive = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href));
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`transition-colors flex items-center justify-center p-1.5 relative shrink-0 ${
                isActive ? "text-white scale-110" : "text-slate-500 hover:text-white"
              }`}
              title={link.name}
            >
              <link.icon size={20} strokeWidth={isActive ? 2.5 : 2} className="transition-all" />
              {isActive && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute -bottom-2 w-1.5 h-1.5 rounded-full bg-slate-300"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 25, mass: 0.5 }}
                  style={{ transformOrigin: "center" }}
                />
              )}
            </Link>
          );
        })}
      </motion.nav>
    </div>
  );
}
