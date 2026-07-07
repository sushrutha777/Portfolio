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
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="glass rounded-full px-4 sm:px-8 py-3 flex items-center justify-center gap-4 sm:gap-8 border border-white/5 shadow-2xl bg-[#151515]/80 backdrop-blur-md"
      >
        {navLinks.map((link) => {
          const isActive = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href));
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`transition-colors flex items-center justify-center p-1 relative ${
                isActive ? "text-white" : "text-slate-500 hover:text-white"
              }`}
              title={link.name}
            >
              <link.icon size={18} strokeWidth={2.5} />
              {isActive && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute -bottom-2 w-1.5 h-1.5 rounded-full bg-brand-purple"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          );
        })}
      </motion.nav>
    </div>
  );
}
