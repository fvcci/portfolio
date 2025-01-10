import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Felix Fong</title>
        <meta name="description" content="Felix Fong's Porfolio" />
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="pb-8">Hi there</div>
        <div>
          <h1>My name is Felix Fong</h1>
          <h2>
            I&apos;m a software engineer and CS student at McMaster University
          </h2>
        </div>
        <div className="flex flex-col">
          <div className="py-8">
            <a href="resume.pdf">resume.pdf</a>
          </div>
          <a href="https://github.com/fvcci">github.com/fvcci</a>
          <a href="https://www.linkedin.com/in/felixfong58/">
            linkedin.com/in/felixfong58
          </a>
          <a href="mailto:hi.there@fongfelix.com">hi.there@fongfelix.com</a>
        </div>
      </main>
    </>
  );
}
