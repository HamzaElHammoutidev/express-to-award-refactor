import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="w-full px-4 md:px-6 pt-5 pb-2 md:pb-4">
      <div className="w-full overflow-hidden rounded-[20px] md:rounded-[32px]">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full aspect-video object-cover"
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
