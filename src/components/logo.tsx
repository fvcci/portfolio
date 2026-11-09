// Drawn in theme colours so it matches public/logo-light.svg and
// public/logo-dark.svg without swapping files. The viewBox crops the empty
// space above the shape in those 26x26 files so it centres with the header.
export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 4.24264 25.4558 21.2132"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12.7287 12.7286L14.85 10.6073L16.2642 12.0215L14.1429 14.1428L17.6784 17.6783L12.7287 22.6281L7.77891 17.6783L11.3144 14.1428L9.19313 12.0215L10.6073 10.6073L12.7287 12.7286Z"
        className="fill-brand"
      />
      <path
        d="M9.89949 5.65685L2.82843 12.7279L12.7279 22.6274L22.6274 12.7279L15.5563 5.65685L16.9706 4.24264L25.4558 12.7279L12.7279 25.4558L0 12.7279L8.48528 4.24264L9.89949 5.65685Z"
        className="fill-foreground"
      />
    </svg>
  );
}
