import { useState, useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MediaLightboxProps {
  media: string[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

const MediaLightbox = ({ media, currentIndex, onClose, onNavigate }: MediaLightboxProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const isVideo = (url: string) => {
    return /\.(mp4|webm|mov|ogg)$/i.test(url);
  };

  // Lock body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Pause video when navigating away or closing
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, [currentIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrevious();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === ' ' && isVideo(media[currentIndex])) {
        e.preventDefault();
        togglePlayPause();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, media]);

  const handlePrevious = () => {
    onNavigate(currentIndex > 0 ? currentIndex - 1 : media.length - 1);
  };

  const handleNext = () => {
    onNavigate(currentIndex < media.length - 1 ? currentIndex + 1 : 0);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Swipe handlers for mobile
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) handleNext();
    if (isRightSwipe) handlePrevious();
  };

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center animate-fade-in"
      onClick={handleBackdropClick}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Close Button */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 right-4 text-white hover:text-tattoo-red hover:bg-white/10 z-10 w-12 h-12"
        onClick={onClose}
      >
        <X size={32} />
      </Button>

      {/* Navigation Buttons */}
      {media.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 text-white hover:text-tattoo-red hover:bg-white/10 z-10 w-12 h-12"
            onClick={handlePrevious}
          >
            <ChevronLeft size={48} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 text-white hover:text-tattoo-red hover:bg-white/10 z-10 w-12 h-12"
            onClick={handleNext}
          >
            <ChevronRight size={48} />
          </Button>
        </>
      )}

      {/* Media Content */}
      <div className="w-full h-full flex items-center justify-center p-4 md:p-12">
        {isVideo(media[currentIndex]) ? (
          <div className="relative max-w-full max-h-full flex items-center justify-center">
            <video
              ref={videoRef}
              src={media[currentIndex]}
              className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-lg"
              playsInline
              onClick={(e) => {
                e.stopPropagation();
                togglePlayPause();
              }}
              onEnded={() => setIsPlaying(false)}
            />
            {/* Custom Play/Pause Overlay */}
            <button
              className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-all"
              onClick={(e) => {
                e.stopPropagation();
                togglePlayPause();
              }}
            >
              <div className="w-20 h-20 rounded-full bg-tattoo-red/90 hover:bg-tattoo-red flex items-center justify-center transition-all transform hover:scale-110">
                {isPlaying ? (
                  <Pause className="w-10 h-10 text-white" fill="white" />
                ) : (
                  <Play className="w-10 h-10 text-white ml-1" fill="white" />
                )}
              </div>
            </button>
          </div>
        ) : (
          <img
            src={media[currentIndex]}
            alt="Lightbox"
            className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-lg animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
        )}
      </div>

      {/* Counter */}
      {media.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white bg-black/60 px-6 py-2 rounded-full text-sm font-medium">
          {currentIndex + 1} / {media.length}
        </div>
      )}
    </div>
  );
};

export default MediaLightbox;
