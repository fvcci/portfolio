import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="pb-8">
        <div className="hidden text-[200px] font-bold leading-none xl:flex xl:space-x-20">
          Hi there
        </div>
        <div className="block text-8xl font-bold md:text-[200px] md:leading-none xl:hidden">
          Hello
        </div>
      </div>
      <div>
        <h1>My name is Felix Fong</h1>
        <h2>
          I&apos;m a software engineer and CS student at McMaster University
        </h2>
      </div>
      <div className="flex flex-col space-y-8">
        <div className="flex flex-row items-center space-x-10 pb-6 pt-14">
          <Image
            className="w-10"
            src="/icons/resume.svg"
            alt="resume.svg"
            width="0"
            height="0"
          />
          <a href="https://github.com/fvcci/resumes/blob/main/resumes/resume.pdf">
            resume.pdf
          </a>
        </div>
        <div className="flex flex-row items-center space-x-10">
          <Image
            className="w-10"
            src="/icons/github.svg"
            alt="github.svg"
            width="0"
            height="0"
          />
          <a href="https://github.com/fvcci">github.com/fvcci</a>
        </div>
        <div className="flex flex-row items-center space-x-10">
          <Image
            className="w-10"
            src="/icons/linkedin.svg"
            alt="linkedin.svg"
            width="0"
            height="0"
          />
          <a href="https://www.linkedin.com/in/felixfong58/">
            linkedin.com/in/felixfong58
          </a>
        </div>
        <div className="flex flex-row items-center space-x-10">
          <Image
            className="w-10"
            src="/icons/email.svg"
            alt="email.svg"
            width="0"
            height="0"
          />
          <a href="mailto:hi.there@fongfelix.com">hi.there@fongfelix.com</a>
        </div>
      </div>
    </>
  );
}
