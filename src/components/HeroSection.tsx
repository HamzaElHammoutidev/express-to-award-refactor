import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="w-full pb-2 md:pb-4">
      <div className="w-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-[60vh] md:h-[100vh] object-cover"
          poster="https://parebriseexpress.ma/images/assets/bpe-rca.jpg"
        >
          <source
            src="https://parebriseexpress.ma//storage/theme-videos/March2025/Y8X7He7aKX51lU78FPHq.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </section>
  );
};

export default HeroSection;
