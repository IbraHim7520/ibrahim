import TechOrbit from "../FloatingOrbit";

const Hero = () => {
  return (
    <main className="w-full min-h-screen bg-[#fcfcfd] overflow-hidden">
      <section className='w-full min-h-screen bg-[url("https://assets.prebuiltui.com/images/components/hero-section/hero-grid-gradient-img.png")] bg-cover bg-center bg-no-repeat'>

        <div className="max-w-400 mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 py-16 lg:py-24 flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* LEFT CONTENT */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl">

            <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 rounded-full px-3 py-1 text-sm mb-6">
              <span className="bg-indigo-600 text-white px-2 py-0.5 rounded-full text-xs">
                Available
              </span>
              <span className="text-indigo-600 font-medium">
                Open for freelance & collaborations
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight">
              Hi, I&apos;m <span className="text-indigo-600">Ibrahim</span>
              <br />
              Full-Stack Web Developer
            </h1>

            <p className="mt-6 text-lg text-neutral-600 max-w-lg leading-relaxed">
              I build modern, scalable and high-performance web applications
              using React, Next.js, Node.js and TypeScript. My focus is creating
              fast, user-friendly digital products that solve real problems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">

<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
  <button className="w-full sm:w-auto px-6 py-3.5 md:px-8 md:py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-semibold transition shadow-lg shadow-indigo-200 active:scale-95 text-sm md:text-base">
    View My Projects
  </button>

  <button className="w-full sm:w-auto px-6 py-3.5 md:px-8 md:py-4 border border-neutral-300 hover:bg-neutral-100 rounded-full font-semibold transition active:scale-95 text-sm md:text-base text-neutral-700">
    Contact Me
  </button>
</div>

            </div>

          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full flex justify-center lg:justify-end">

            <div className="relative">
              <div className="absolute -inset-2 bg-linear-to-r from-indigo-500 to-purple-500 blur-2xl opacity-10 rounded-3xl"></div>

              <TechOrbit />

            </div>

          </div>

        </div>

      </section>
    </main>
  );
};

export default Hero;