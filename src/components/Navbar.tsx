import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Qui sommes nous?", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Centres", href: "#centres" },
  { label: "Carrières", href: "#carrieres" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <nav
        className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-500 ${
          scrolled
            ? "nav-pill shadow-2xl"
            : "bg-background/30 backdrop-blur-md"
        }`}
      >
        <a href="#" className="flex-shrink-0 mr-4">
          <img
            src="https://parebriseexpress.ma/images/PBE_LOGO_01-2.png"
            alt="Pare-Brise Express"
            className={`h-10 transition-all duration-500 ${scrolled ? "brightness-0" : "brightness-100"}`}
          />
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`px-4 py-2 text-sm font-sans font-medium rounded-full transition-colors duration-300 ${
                scrolled
                  ? "text-primary-foreground hover:bg-primary/10"
                  : "text-foreground/80 hover:text-foreground"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#declaration"
          className={`ml-4 px-5 py-2.5 rounded-full text-sm font-sans font-semibold transition-all duration-300 ${
            scrolled
              ? "bg-primary text-primary-foreground"
              : "bg-primary text-primary-foreground"
          }`}
        >
          Déclarer un sinistre
        </a>

        <button
          className="md:hidden ml-2 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className={`space-y-1.5 transition-all ${scrolled ? "[&>span]:bg-primary-foreground" : "[&>span]:bg-foreground"}`}>
            <span className={`block w-5 h-0.5 transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 top-20 bg-background/98 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-2xl font-serif text-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
