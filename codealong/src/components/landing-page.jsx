import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";


export function LandingPage() {
   const navigate = useNavigate();
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <a className="flex items-center justify-center" href="#">
          <MountainIcon className="h-6 w-6" />
          <span className="text-black font-bold text-2xl pl-2">CodeAlong</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a
            className="pt-1 text-xl font-medium hover:underline underline-offset-4"
            href="#features"
          >
            Features
          </a>
          <a
            className="pt-1 text-xl font-medium hover:underline underline-offset-4"
            href="#about"
          >
            About
          </a>
          <a
            className="pt-1 text-xl font-medium hover:underline underline-offset-4"
            href="#contact"
          >
            Contact
          </a>
          <Button
            className="btn btn-accent bg-green-700 hover:bg-green-800"
            onClick={() => {
              navigate("/join-room");
            }}
          >
            Create/Join Room
          </Button>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Collaborative Coding Interviews Redefined
                </h1>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  CodeAlong revolutionizes the way teams collaborate on coding
                  projects. Seamlessly share code in real-time, communicate
                  through video and voice calls, chat, and execute code with
                  Judge0 integration - all in one powerful platform.
                </p>
                <div className="space-x-4">
                  <Button
                    className="btn btn-accent bg-green-700 hover:bg-green-800"
                    onClick={() => {
                      navigate("/join-room");
                    }}
                  >
                    Create/Join Room
                  </Button>
                  {/* <a
                    className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                    href="#"
                  >
                    Learn More
                  </a> */}
                </div>
              </div>
            </div>
            <img
              alt="Hero"
              className="mx-auto overflow-hidden rounded-xl object-cover"
              height="600"
              src="/assets/user1.PNG"
              width="1200"
            />
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32" id="features">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  New Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Collaborative Coding Made Easy
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  CodeAlong brings real-time code sharing, video and voice
                  calls, chat functionality, and code execution with Judge0 -
                  all in one powerful platform. Collaborate seamlessly with your
                  team and take your coding projects to the next level.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-4xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Real-time Code Sharing</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Work together on the same codefile in real-time, with
                  simultaneous editing and instant updates for all
                  collaborators.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Video and Voice Calls</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Enhance your collaboration with face-to-face communication
                  through seamless video and voice calls.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Integrated Chat</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Keep your team aligned with a built-in chat feature, ensuring
                  quick and efficient communication during coding sessions.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">
                  Code Execution with Judge0
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Test and run your code in real-time with Judge0 integration,
                  providing instant feedback and streamlining the interview
                  process.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Collaborative Editing</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Collaborate seamlessly with your team by editing code
                  together, with simultaneous updates.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Secure and Scalable</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  CodeAlong is built with security and scalability in mind,
                  ensuring your code and data remain safe and accessible.
                </p>
              </div>
            </div>
            <div
              className="flex justify-center flex-col sm:flex-row items-start gap-4"
              id="contact"
            >
              <a
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events_none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="mailto:shubhambogharajobs@email.com"
              >
                Contact us
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 CodeAlong Inc. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  );
}


function MountainIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>)
  );
}
