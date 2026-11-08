export default function Home() {
  return (
    <>
      <h1 className="font-pixel pb-6 text-5xl">Felix Fong</h1>
      <ul className="flex flex-col space-y-2">
        <li>
          <a
            className="underline"
            href="https://github.com/fvcci/resumes/blob/main/resumes/resume.pdf"
          >
            resume
          </a>
        </li>
        <li>
          <a className="underline" href="https://github.com/fvcci">
            github
          </a>
        </li>
        <li>
          <a
            className="underline"
            href="https://www.linkedin.com/in/felixfong58/"
          >
            linkedin
          </a>
        </li>
        <li>
          <a className="underline" href="mailto:hi.there@fongfelix.com">
            email
          </a>
        </li>
      </ul>
    </>
  );
}
