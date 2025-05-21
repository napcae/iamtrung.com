// This file is used to customize how Next.js loads images
// It ensures images work correctly with the base path in production

export default function imageLoader({ src, width, quality }) {
  return `${src}?w=${width}&q=${quality || 75}`
}
