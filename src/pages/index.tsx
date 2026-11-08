const links = [
  {
    label: "resume",
    href: "https://github.com/fvcci/resumes/blob/main/resumes/resume.pdf",
  },
  { label: "github", href: "https://github.com/fvcci" },
  { label: "linkedin", href: "https://www.linkedin.com/in/felixfong58/" },
  { label: "email", href: "mailto:hi.there@fongfelix.com" },
];

export default function Home() {
  return (
    <>
      <h1 className="pb-6">Felix Fong</h1>
      <ul className="flex flex-col space-y-2">
        {links.map(({ label, href }) => (
          <li key={label}>
            <a className="underline" href={href}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
