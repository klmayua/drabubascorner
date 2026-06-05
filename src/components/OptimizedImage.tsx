'use client';

import React from 'react';
import Image from 'next/image';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export default function OptimizedImage({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
}: OptimizedImageProps) {
  // Check if image is an external URL that might not be configured in next.config.ts
  // Or check if it is svg/local
  const isExternal = src.startsWith('http://') || src.startsWith('https://');

  // We can write next.config.ts domain configurations for googleusercontent.com
  // If no width/height, we use fill layout inside a relative parent
  if (!width && !height) {
    return (
      <div className={`relative w-full h-full min-h-[50px] ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={priority}
          loading={priority ? undefined : 'lazy'}
          className="object-cover"
          unoptimized={isExternal} // Avoid build configuration failures for custom user URLs
        />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      loading={priority ? undefined : 'lazy'}
      className={className}
      unoptimized={isExternal}
    />
  );
}
