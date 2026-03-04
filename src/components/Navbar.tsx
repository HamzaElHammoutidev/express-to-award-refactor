import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Qui sommes nous?", href: "/institution" },
  { label: "Engagement", href: "/engag" },
  { label: "Centres", href: "/centres" },
  { label: "Carrières", href: "/carrieres" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const onScroll = useCallback(() => {
    setScrolled(window.scrollY > 60);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-5 px-4"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
      >
        <nav
          className={`flex items-center gap-1 px-4 py-2.5 rounded-full transition-all duration-700 ease-out ${
            scrolled
              ? "bg-background/80 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-border/20"
              : "bg-background shadow-[0_2px_12px_rgba(0,0,0,0.06)] border border-border/30"
          }`}
        >
          <Link to="/" className="flex-shrink-0 mr-6">
            <img
              src="https://parebriseexpress.ma/images/PBE_LOGO_01-2.png"
              alt="Pare-Brise Express"
              className="h-9 transition-all duration-700"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`px-4 py-2 text-[13px] font-sans font-medium rounded-full transition-all duration-300 tracking-wide ${
                  location.pathname === item.href
                    ? "text-primary"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Link
            to="/declaration"
            className="hidden sm:inline-flex ml-4 px-6 py-2.5 rounded-full text-[13px] font-sans font-semibold tracking-wide bg-primary text-primary-foreground hover:bg-gold-dark transition-colors duration-300"
          >
            Déclarer un sinistre
          </Link>

          <button
            className="lg:hidden ml-3 p-2 relative w-10 h-10 flex items-center justify-center"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <div className="relative w-5 h-4">
              <span
                className={`absolute left-0 top-0 w-full h-[1.5px] bg-foreground transition-all duration-500 ease-out ${menuOpen ? "rotate-45 top-[7px]" : ""}`}
              />
              <span
                className={`absolute left-0 top-[7px] w-full h-[1.5px] bg-foreground transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`}
              />
              <span
                className={`absolute left-0 top-[14px] w-full h-[1.5px] bg-foreground transition-all duration-500 ease-out ${menuOpen ? "-rotate-45 top-[7px]" : ""}`}
              />
            </div>
          </button>
        </nav>
      </motion.header>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-background flex flex-col items-center justify-center lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <nav className="flex flex-col items-center gap-6">
              {navItems.map((item, i) => (
                <motion.div key={item.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.06, duration: 0.5 }}>
                  <Link
                    to={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`text-3xl font-serif transition-colors ${
                      location.pathname === item.href ? "text-primary" : "text-foreground hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.5 }}>
                <Link
                  to="/declaration"
                  onClick={() => setMenuOpen(false)}
                  className="mt-6 px-8 py-3 rounded-full bg-primary text-primary-foreground font-sans font-semibold text-sm tracking-wide"
                >
                  Déclarer un sinistre
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
