// Drawn in theme colours so it matches public/logo-light.svg and
// public/logo-dark.svg without swapping files.
export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 29 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M14.5 24.1667L0 9.66667L9.66667 0L11.2778 1.61111L3.22222 9.66667L8.86111 15.3056L12.8889 11.2778L10.4722 8.86111L12.0833 7.25L14.5 9.66667L16.9167 7.25L18.5278 8.86111L16.1111 11.2778L20.1389 15.3056L25.7778 9.66667L17.7222 1.61111L19.3333 0L29 9.66667L14.5 24.1667Z"
        className="fill-foreground"
      />
      <path
        d="M14.5 12.8889L18.5278 16.9167L14.5 20.9444L10.4722 16.9167L14.5 12.8889Z"
        className="fill-brand"
      />
    </svg>
  );
}
