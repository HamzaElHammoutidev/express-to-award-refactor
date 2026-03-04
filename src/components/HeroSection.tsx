import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="https://parebriseexpress.ma/images/assets/bpe-rca.jpg"
        >
          <source
            src="https://parebriseexpress.ma/videos/hero-v2.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/20 to-background" />
      </div>

      {/* Content — bottom left like vincentetdussault.com */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-24 md:pb-32 section-padding">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
        >
          <h1 className="text-[clamp(2.5rem,8vw,7rem)] font-serif leading-[0.95] tracking-[-0.02em]">
            Votre pare-brise,
            <br />
            <span className="text-gradient-gold italic font-light">
              notre priorité
            </span>
          </h1>
          <p className="text-base md:text-lg font-sans text-cream-muted max-w-md mt-8 font-light leading-relaxed">
            Réparation rapide, qualité garantie
          </p>
        </motion.div>

        {/* Bottom-right CTA link like the reference */}
        <motion.div
          className="absolute bottom-8 right-8 md:right-20 lg:right-28"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          <a
            href="#services"
            className="flex items-center gap-4 text-[13px] font-sans text-cream-muted hover:text-primary transition-colors duration-300 group tracking-wide"
          >
            Nos services
            <span className="inline-block w-10 h-px bg-primary group-hover:w-16 transition-all duration-500" />
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ArrowDown size={20} className="text-cream-muted/50" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
