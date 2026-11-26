import { useState } from 'react';
import { Scissors } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
}

export function ResilientImage({
  src,
  alt,
  className = '',
  fallbackTitle = 'SULTANS Salon Studio',
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-[#EAE5DC] text-[#57524A] p-6 text-center ${className}`}
        role="img"
        aria-label={alt}
      >
        <Scissors className="w-7 h-7 mb-2 text-[#9E763B]" strokeWidth={1.5} aria-hidden="true" />
        <span className="font-display text-sm font-medium text-[#171614]">{fallbackTitle}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      loading="lazy"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
