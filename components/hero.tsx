const Hero = () => {
  return (
    <div className="text-center mb-12">
      <h1 className="text-4xl md:text-7xl font-bold text-transparent tracking-tight bg-clip-text bg-linear-to-r from-blue-500 via-purple-500 to-teal-500">
        Momen Yasser
      </h1>
      <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
        <h2 className="text-2xl md:text-4xl font-bold">Full Stack Developer</h2>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
          I craft end-to-end solutions with 1+ years of experience building
          scalable web applications.
        </p>
        <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto">
          Previously Software Engineer Intern at{' '}
          <span className="text-blue-400">ITWorx</span>
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6 md:mb-8">
        <span
          className={`px-3 md:px-4 py-1.5 md:py-2 bg-blue-500/10 rounded-full text-blue-400 text-xs md:text-sm`}
        >
          TypeScript
        </span>
        <span
          className={`px-3 md:px-4 py-1.5 md:py-2 bg-purple-500/10 rounded-full text-purple-400 text-xs md:text-sm`}
        >
          React & Next.js
        </span>
        <span
          className={`px-3 md:px-4 py-1.5 md:py-2 bg-teal-500/10 rounded-full text-teal-400 text-xs md:text-sm`}
        >
          Node.js
        </span>
        <span
          className={`px-3 md:px-4 py-1.5 md:py-2 bg-blue-500/10 rounded-full text-blue-400 text-xs md:text-sm`}
        >
          TailwindCSS
        </span>
        <span
          className={`px-3 md:px-4 py-1.5 md:py-2 bg-purple-500/10 rounded-full text-purple-400 text-xs md:text-sm`}
        >
          Express
        </span>
      </div>
    </div>
  )
}

export default Hero
