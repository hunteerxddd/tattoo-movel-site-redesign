import { useState } from "react";
import { Play } from "lucide-react";
import MediaLightbox from "./MediaLightbox";

interface MediaItem {
  url: string;
  description?: string;
}

interface MediaGalleryProps {
  media: (string | MediaItem)[];
  className?: string;
  columns?: 1 | 2 | 3 | 4;
  singleImage?: boolean;
}

const MediaGallery = ({ media, className = "", columns = 3, singleImage = false }: MediaGalleryProps) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const normalizeMedia = (item: string | MediaItem): MediaItem => {
    if (typeof item === 'string') {
      return { url: item };
    }
    return item;
  };

  const isVideo = (url: string) => {
    return /\.(mp4|webm|mov|ogg)$/i.test(url);
  };

  const getImgurDirectUrl = (url: string) => {
    if (url.includes('imgur.com') && !url.includes('i.imgur.com')) {
      const id = url.split('/').pop()?.replace(/\.[^/.]+$/, '') || '';
      if (isVideo(url)) {
        return `https://i.imgur.com/${id}.mp4`;
      }
      return `https://i.imgur.com/${id}.jpg`;
    }
    return url;
  };

  const handleMediaClick = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const normalizedMedia = media.map(normalizeMedia);
  const lightboxUrls = normalizedMedia.map(item => getImgurDirectUrl(item.url));

  const getGridCols = () => {
    if (singleImage) return 'grid-cols-1';
    switch (columns) {
      case 1: return 'grid-cols-1';
      case 2: return 'grid-cols-1 sm:grid-cols-2';
      case 4: return 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4';
      default: return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';
    }
  };

  return (
    <>
      <div className={`grid ${getGridCols()} gap-4 md:gap-6 ${className}`}>
        {normalizedMedia.map((item, index) => {
          const directUrl = getImgurDirectUrl(item.url);
          const videoItem = isVideo(item.url);
          
          return (
            <div key={index} className="flex flex-col items-center">
              <div
                className={`relative overflow-hidden rounded-lg cursor-pointer group bg-tattoo-gray w-full ${
                  singleImage ? 'max-w-4xl mx-auto' : ''
                }`}
                onClick={() => handleMediaClick(index)}
              >
                <div className="aspect-square sm:aspect-[4/3] w-full">
                  {videoItem ? (
                    <>
                      <video
                        src={directUrl}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        poster={directUrl.replace(/\.(mp4|webm|mov)$/i, '.jpg')}
                        preload="metadata"
                        playsInline
                        muted
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-all">
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-tattoo-red/80 flex items-center justify-center group-hover:bg-tattoo-red group-hover:scale-110 transition-all duration-300 shadow-lg">
                          <Play className="w-8 h-8 md:w-10 md:h-10 text-white ml-1" fill="white" />
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <img
                        src={directUrl}
                        alt={item.description || `Galeria ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                    </>
                  )}
                </div>
              </div>
              {item.description && (
                <p className="text-foreground text-center font-medium mt-4 text-sm md:text-base">
                  {item.description}
                </p>
              )}
            </div>
          );
        })}
      </div>

      {lightboxOpen && (
        <MediaLightbox
          media={lightboxUrls}
          currentIndex={currentIndex}
          onClose={() => setLightboxOpen(false)}
          onNavigate={setCurrentIndex}
        />
      )}
    </>
  );
};

export default MediaGallery;
