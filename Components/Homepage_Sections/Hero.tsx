
import TechOrbit from "../FloatingOrbit";

const Hero = () => {
  return (
    <main className="w-full h-screen bg-[#fcfcfd] overflow-hidden">
      <section className='w-full bg-[url("https://assets.prebuiltui.com/images/components/hero-section/hero-grid-gradient-img.png")] bg-cover bg-center bg-no-repeat'>

        <div className="max-w-400 mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 py-20 lg:py-28 flex flex-col-reverse lg:flex-row items-center justify-between gap-16">

          {/* LEFT CONTENT */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 rounded-full px-3 py-1 text-sm mb-6">
              <span className="bg-indigo-600 text-white px-2 py-0.5 rounded-full text-xs">
                Available
              </span>
              <span className="text-indigo-600 font-medium">
                Open for freelance & collaborations
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight">
              Hi, I&apos;m <span className="text-indigo-600">Ibrahim</span>
              <br />
              Full-Stack Web Developer
            </h1>

            {/* Description */}
            <p className="mt-6 text-lg text-neutral-600 max-w-lg leading-relaxed">
              I build modern, scalable and high-performance web applications
              using React, Next.js, Node.js and TypeScript. My focus is creating
              fast, user-friendly digital products that solve real problems.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">

              <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-semibold transition shadow-lg shadow-indigo-200">
                View My Projects
              </button>

              <button className="px-8 py-4 border border-neutral-300 hover:bg-neutral-100 rounded-full font-semibold transition">
                Contact Me
              </button>

            </div>

           
            

          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full max-w-md sm:max-w-lg lg:max-w-xl relative">

            <div className="absolute -inset-2 bg-linear-to-r from-indigo-500 to-purple-500 blur-2xl opacity-10 rounded-3xl"></div>

            <TechOrbit />

          </div>

        </div>

      </section>
    </main>
  );
};

export default Hero;