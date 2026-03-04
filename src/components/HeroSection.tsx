import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
        poster="https://parebriseexpress.ma/images/assets/bpe-rca.jpg"
      >
        <source
          src="https://parebriseexpress.ma//storage/theme-videos/March2025/Y8X7He7aKX51lU78FPHq.mp4"
          type="video/mp4"
        />
      </video>
    </section>
  );
};

export default HeroSection;
