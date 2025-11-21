import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MediaLightboxProps {
  media: string[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

const MediaLightbox = ({ media, currentIndex, onClose, onNavigate }: MediaLightboxProps) => {
  const isVideo = (url: string) => {
    return url.includes('imgur.com') && /\.(mp4|webm|mov)$/i.test(url);
  };

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

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      {/* Close Button */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 right-4 text-white hover:text-tattoo-red z-10"
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
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-tattoo-red z-10"
            onClick={handlePrevious}
          >
            <ChevronLeft size={48} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-tattoo-red z-10"
            onClick={handleNext}
          >
            <ChevronRight size={48} />
          </Button>
        </>
      )}

      {/* Media Content */}
      <div className="max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center">
        {isVideo(media[currentIndex]) ? (
          <video
            src={media[currentIndex]}
            controls
            autoPlay
            className="max-w-full max-h-full object-contain"
          />
        ) : (
          <img
            src={media[currentIndex]}
            alt="Lightbox"
            className="max-w-full max-h-full object-contain"
          />
        )}
      </div>

      {/* Counter */}
      {media.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white bg-black/50 px-4 py-2 rounded-full">
          {currentIndex + 1} / {media.length}
        </div>
      )}
    </div>
  );
};

export default MediaLightbox;
