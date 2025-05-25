// This file is used to customize how Next.js loads images
// It ensures images work correctly with the base path in production

export default function imageLoader({ src, width, quality }) {
  // Get the base path from the environment
  const basePath = process.env.NODE_ENV === 'production' ? '/iamtrung.com' : '';

  // Return the full path including the base path
  return `${basePath}${src}`;
}
