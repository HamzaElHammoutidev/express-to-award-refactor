import { motion } from "framer-motion";

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
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-20 md:pb-28 section-padding">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-serif leading-[0.95] tracking-tight mb-6">
            Votre pare-brise,
            <br />
            <span className="text-gradient-gold italic">notre priorité</span>
          </h1>
          <p className="text-lg md:text-xl font-sans text-cream-muted max-w-xl mt-6">
            Réparation rapide, qualité garantie
          </p>
        </motion.div>

        <motion.div
          className="absolute bottom-8 right-8 md:right-20"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <a
            href="#services"
            className="flex items-center gap-3 text-sm font-sans text-cream-muted hover:text-primary transition-colors group"
          >
            Nos services
            <span className="inline-block w-10 h-px bg-primary group-hover:w-16 transition-all" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
