import { useState } from "react";
import { Play } from "lucide-react";
import MediaLightbox from "./MediaLightbox";

interface MediaGalleryProps {
  media: string[];
  className?: string;
}

const MediaGallery = ({ media, className = "" }: MediaGalleryProps) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const isVideo = (url: string) => {
    return url.includes('imgur.com') && /\.(mp4|webm|mov)$/i.test(url);
  };

  const getImgurDirectUrl = (url: string) => {
    if (url.includes('imgur.com')) {
      const id = url.split('/').pop() || '';
      return `https://i.imgur.com/${id}.jpg`;
    }
    return url;
  };

  const handleMediaClick = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ${className}`}>
        {media.map((item, index) => (
          <div
            key={index}
            className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group bg-tattoo-gray"
            onClick={() => handleMediaClick(index)}
          >
            {isVideo(item) ? (
              <>
                <video
                  src={getImgurDirectUrl(item)}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  poster={getImgurDirectUrl(item.replace(/\.(mp4|webm|mov)$/i, '.jpg'))}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/60 transition-all">
                  <div className="w-16 h-16 rounded-full bg-tattoo-red/80 flex items-center justify-center group-hover:bg-tattoo-red transition-all">
                    <Play className="w-8 h-8 text-white ml-1" fill="white" />
                  </div>
                </div>
              </>
            ) : (
              <img
                src={getImgurDirectUrl(item)}
                alt={`Galeria ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
            )}
          </div>
        ))}
      </div>

      {lightboxOpen && (
        <MediaLightbox
          media={media.map(getImgurDirectUrl)}
          currentIndex={currentIndex}
          onClose={() => setLightboxOpen(false)}
          onNavigate={setCurrentIndex}
        />
      )}
    </>
  );
};

export default MediaGallery;
