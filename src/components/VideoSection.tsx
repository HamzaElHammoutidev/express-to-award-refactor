const VideoSection = () => {
  return (
    <section className="w-full bg-background py-4 md:py-6">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="w-full h-auto block"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>
    </section>
  );
};

export default VideoSection;
