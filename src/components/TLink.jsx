import { usePageTransition } from '../context/TransitionContext';

/**
 * Internal link that plays the mano-capisci transition before navigating.
 * Use for any in-app route change; use a plain <a> for external links.
 */
export default function TLink({ to, children, className, onClick, ...rest }) {
  const { goTo } = usePageTransition();

  const handleClick = (e) => {
    e.preventDefault();
    onClick?.(e);
    goTo(to);
  };

  return (
    <a href={to} className={className} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
