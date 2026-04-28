import React from 'react';

type ImageProps = {
  src: string; // URL изображения на сервере
  alt: string;
  className?: string;
};

const ImageAtom: React.FC<ImageProps> = ({ src, alt, className = '' }) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [hasError, setHasError] = React.useState(false);

  const handleLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className={`image-container ${className}`}>
      {isLoading && <div className="image-loader">Загрузка...</div>}
      <img
        src={src}
        alt={alt}
        className={`image-atom ${hasError ? 'error' : ''}`}
        onLoad={handleLoad}
        onError={handleError}
        style={{ display: isLoading ? 'none' : 'block' }}
        loading="lazy"
      />
      {hasError && <div className="error-message">Изображение не загрузилось</div>}
    </div>
  );
};

export default ImageAtom;
