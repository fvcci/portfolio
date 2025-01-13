import Head from "next/head";
import Image from "next/image";
import Email from "../../icons/email.svg";
import Github from "../../icons/github.svg";
import Linkedin from "../../icons/linkedin.svg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Felix Fong</title>
        <meta name="description" content="Felix Fong's Porfolio" />
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col">
        <div className="text-[256px] font-bold">Hi there</div>
        <div>
          <h1>My name is Felix Fong</h1>
          <h2>
            I&apos;m a software engineer and CS student at McMaster University
          </h2>
        </div>
        <div className="flex flex-col space-y-8">
          <div className="flex flex-row items-center space-x-10 pb-6 pt-14">
            <Image
              src="/icons/resume.svg"
              alt="resume.svg"
              width="43"
              height="43"
            />
            <a href="https://github.com/fvcci/resumes/blob/main/resumes/resume.pdf">
              resume.pdf
            </a>
          </div>
          <div className="flex flex-row items-center space-x-10">
            <Image
              src="/icons/github.svg"
              alt="github.svg"
              width="43"
              height="43"
            />
            <a href="https://github.com/fvcci">github.com/fvcci</a>
          </div>
          <div className="flex flex-row items-center space-x-10">
            <Image
              src="/icons/linkedin.svg"
              alt="linkedin.svg"
              width="43"
              height="43"
            />
            <a href="https://www.linkedin.com/in/felixfong58/">
              linkedin.com/in/felixfong58
            </a>
          </div>
          <div className="flex flex-row items-center space-x-10">
            <Image
              src="/icons/email.svg"
              alt="email.svg"
              width="43"
              height="43"
            />
            <a href="mailto:hi.there@fongfelix.com">hi.there@fongfelix.com</a>
          </div>
        </div>
      </main>
    </>
  );
}
