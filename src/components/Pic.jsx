/**
 * <img> for an image imported through vite-imagetools with `as=picture`
 * (see PRESETS in vite.config.js). Renders the responsive srcset, the
 * intrinsic width/height (so the browser reserves the space — no layout
 * shift) and lazy decoding. Pass `loading="eager"` for anything visible when
 * the page opens, and `sizes` so the browser picks the right candidate.
 */
export default function Pic({ pic, alt = '', sizes, loading = 'lazy', ...rest }) {
  return (
    <img
      src={pic.img.src}
      srcSet={pic.sources.webp}
      sizes={sizes}
      width={pic.img.w}
      height={pic.img.h}
      alt={alt}
      loading={loading}
      decoding="async"
      {...rest}
    />
  );
}
