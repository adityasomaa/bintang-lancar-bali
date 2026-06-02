"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "./Logo";
import { nav, site, waLink } from "@/lib/site";
import { IconMenu, IconClose, IconWhatsApp, IconPhone } from "./Icons";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close mobile menu on route change
  useEffect(() => setOpen(false), [pathname]);

  // lock scroll while menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[90] transition-all duration-300 ${
          scrolled
            ? "border-b border-line/70 bg-white/85 backdrop-blur-lg shadow-soft"
            : "bg-transparent"
        }`}
      >
        <nav className="container-x flex h-16 items-center justify-between md:h-20">
          <Link href="/" aria-label={site.name} className="relative z-10">
            <Logo />
          </Link>

          {/* desktop links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                      active ? "text-brand" : "text-ink hover:text-brand"
                    }`}
                  >
                    {item.label}
                    {active && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 -z-10 rounded-full bg-brand-50"
                        transition={{ type: "spring", stiffness: 400, damping: 32 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* desktop CTA */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={`tel:+${site.phoneIntl}`}
              className="inline-flex items-center gap-2 text-sm font-bold text-ink transition-colors hover:text-brand"
            >
              <IconPhone className="h-4 w-4 text-brand" />
              {site.phoneDisplay}
            </a>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-bold text-ink shadow-soft transition-all hover:-translate-y-0.5 hover:brightness-105"
            >
              <IconWhatsApp className="h-4 w-4" />
              Chat WhatsApp
            </a>
          </div>

          {/* hamburger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Tutup menu" : "Buka menu"}
            aria-expanded={open}
            className="relative z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-ink shadow-soft lg:hidden"
          >
            {open ? <IconClose className="h-6 w-6" /> : <IconMenu className="h-6 w-6" />}
          </button>
        </nav>
      </header>

      {/* mobile / tablet overlay menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[80] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="absolute inset-0 gradient-brand">
              <div className="bg-grid absolute inset-0 opacity-20" />
            </div>
            <div className="container-x relative flex h-full flex-col pt-24 pb-10">
              <ul className="flex flex-col gap-1">
                {nav.map((item, i) => {
                  const active = pathname === item.href;
                  return (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.08 + i * 0.06 }}
                    >
                      <Link
                        href={item.href}
                        className={`flex items-center justify-between border-b border-white/15 py-4 text-2xl font-extrabold tracking-tight ${
                          active ? "text-gold" : "text-white"
                        }`}
                      >
                        {item.label}
                        <span className="text-sm font-mono text-white/40">
                          0{i + 1}
                        </span>
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-auto flex flex-col gap-3"
              >
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-4 text-base font-bold text-ink shadow-soft"
                >
                  <IconWhatsApp className="h-5 w-5" />
                  Chat WhatsApp Sekarang
                </a>
                <a
                  href={`tel:+${site.phoneIntl}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-4 text-base font-bold text-white"
                >
                  <IconPhone className="h-5 w-5" />
                  {site.phoneDisplay}
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
