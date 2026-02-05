import React, { useState, useEffect } from 'react';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  placeholderColor?: string;
  loading?: 'lazy' | 'eager';
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className,
  imgClassName,
  placeholderColor = 'bg-gray-100 dark:bg-gray-900',
  loading = 'lazy',
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const imgRef = React.useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Reset state on src change to handle dynamic content
    setIsLoaded(false);
    setError(false);

    // Check if image is already completed (cached)
    if (imgRef.current?.complete) {
      setIsLoaded(true);
    }
  }, [src]);

  return (
    <div className={`relative overflow-hidden flex items-center justify-center ${className || ''}`}>
      {/* Pulse Placeholder */}
      {(!isLoaded || error) && (
        <div
          className={`absolute inset-0 ${placeholderColor} ${!error ? 'animate-pulse' : ''} transition-opacity duration-500 z-10 flex items-center justify-center`}
        >
          {error && <i className="fas fa-image text-gray-400 text-3xl opacity-30"></i>}
        </div>
      )}

      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading={loading}
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          console.error(`Failed to load image: ${src}`);
          setError(true);
        }}
        className={`w-full h-full object-cover block transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${imgClassName || ''}`}
        {...props}
      />
    </div>
  );
};

export default LazyImage;