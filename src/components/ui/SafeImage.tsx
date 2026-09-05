'use client';

import React, { useState } from 'react';
import Image, { ImageProps } from 'next/image';

export interface SafeImageProps extends ImageProps {
  fallbackTitle?: string;
  fallbackCategory?: string;
}

export default function SafeImage({
  src,
  alt,
  className = '',
  fallbackTitle,
  fallbackCategory,
  ...props
}: SafeImageProps) {
  const [failed, setFailed] = useState(false);

  // High quality architectural backup photo if specific URL fails
  const backupSrc = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop';

  return (
    <Image
      src={failed ? backupSrc : src}
      alt={alt || fallbackTitle || fallbackCategory || 'Forma Atelier Architecture'}
      className={className}
      onError={() => {
        if (!failed) {
          setFailed(true);
        }
      }}
      {...props}
    />
  );
}
