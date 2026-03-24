const VideoSection = () => {
  return (
    <section className="w-full px-4 md:px-6 pt-2 md:pt-4 pb-2 md:pb-4">
      <div className="w-full overflow-hidden rounded-[20px] md:rounded-[32px]">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full aspect-video object-cover block"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default VideoSection;
