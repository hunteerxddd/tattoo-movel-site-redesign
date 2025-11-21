import { useEffect, useRef } from "react";

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay might be blocked, that's ok
      });
    }
  }, []);

  return (
    <div className="relative w-full h-[80vh] md:h-[90vh] overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        poster="https://i.imgur.com/jGJK959.jpg"
      >
        <source src="https://i.imgur.com/jGJK959.mp4" type="video/mp4" />
      </video>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-4 text-center">
        {/* Logo */}
        <div className="mb-6 animate-fade-in">
          <img
            src="https://i.imgur.com/CqjFhSe.png"
            alt="Tattoo Móvel Logo"
            className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover border-4 border-tattoo-red shadow-2xl animate-glow-pulse"
          />
        </div>

        {/* Slogan */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-4 animate-fade-in drop-shadow-2xl">
          Tatuagem sobre rodas
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-white/90 max-w-2xl animate-fade-in drop-shadow-lg">
          Estúdio móvel profissional para seu evento
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
