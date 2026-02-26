import { motion } from "framer-motion";

const VideoSection = () => {
  return (
    <section className="py-24 md:py-40 section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif">
            Découvrez <span className="italic text-gradient-gold">notre expertise</span>
          </h2>
        </motion.div>

        <motion.div
          className="relative rounded-3xl overflow-hidden aspect-video"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <video
            controls
            playsInline
            className="w-full h-full object-cover"
            poster="https://parebriseexpress.ma/images/assets/bpe-rca.jpg"
          >
            <source
              src="https://parebriseexpress.ma/videos/hero-v2.mp4"
              type="video/mp4"
            />
          </video>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
