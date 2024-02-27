export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between lg:flex">
        <h1>max morgan</h1>
      </div>

      <div className="
        w-full
        max-w-3xl
        flex
        flex-col
        gap-y-1
        justify-start
        items-center
        after:absolute
        after:-z-20
        after:h-[180px]
        after:w-full
        sm:after:w-[240px]
        after:translate-x-1/3
        after:bg-gradient-conic
        after:from-sky-200
        after:via-blue-200
        after:blur-2xl
        after:content-['']
        after:dark:from-sky-900
        after:dark:via-[#0141ff]
        after:dark:opacity-30
        z-[-1]
      ">
        <h2>Civic technologist focusing on government service delivery, digital markets, and privacy.</h2>
        <p>Currently working on government service delivery at the City of Detroit. Previously worked on digital markets and privacy at Meta Platforms (aka Facebook).</p>
      </div>
      {/* TODO: Add main occupations (Civic Tech, City of Detroit) in center of page. */}

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-5 lg:text-left">
        <a
          href="https://github.com/mjmor"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            GitHub{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            See what I&lsquo;ve been working on recently.
          </p>
        </a>

        <a
          href="https://notes.maxmorgan.dev/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Notebook{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            See my notes on design, web development, devops, and more.
          </p>
        </a>

        <a
          // TODO: Place resume in static folder.
          href=""
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Resume{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
            Download my resume.
          </p>
        </a>

        <a
          href="https://www.linkedin.com/in/maxwelljmorgan/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            LinkedIn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Connect with me on LinkedIn.
          </p>
        </a>

        <a
          href="https://open.spotify.com/user/1215370877"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Spotify{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
            Bond over music with me on Spotify.
          </p>
        </a>
      </div>
    </main>
  );
}
