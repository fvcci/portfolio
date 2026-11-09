// The source of truth for the logo, drawn in theme colours so one component
// covers light and dark. The favicons in public/ are rendered from this shape.
// The original artwork is 26x26; the viewBox crops the empty space above the
// shape so it centres with the header.
export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 4.24264 25.4558 21.2132"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect
        width="7"
        height="7"
        transform="matrix(-0.707107 0.707107 0.707107 0.707107 12.7279 12.7279)"
        className="fill-brand"
      />
      <path
        d="M8.48528 4.24264L9.89949 5.65685L2.82843 12.7279L12.7279 22.6274L22.6274 12.7279L15.5563 5.65685L16.9706 4.24264L25.4558 12.7279L12.7279 25.4558L0 12.7279L8.48528 4.24264Z"
        className="fill-foreground"
      />
      <path
        d="M10.6066 10.6067L12.7279 12.728L14.8492 10.6067L16.2635 12.0209L12.7279 15.5564L9.19238 12.0209L10.6066 10.6067Z"
        className="fill-foreground"
      />
    </svg>
  );
}
