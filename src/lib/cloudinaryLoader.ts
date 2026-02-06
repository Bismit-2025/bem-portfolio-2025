import type { ImageLoader } from 'next/image';

const cloudinaryLoader: ImageLoader = ({ src, width, quality }) => {
  if (src.startsWith('/')) {
    return src;
  }
  const params = [`w_${width}`, `q_${quality || 'auto'}`];
  return `https://res.cloudinary.com/dkswvabkh/image/upload/${params.join(',')}/${src}`;
};

export default cloudinaryLoader;
