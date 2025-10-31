const Skills = () => {
  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-800 p-4 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
        <div className="p-4 md:p-6 rounded-lg transition-colors border-2 bg-gray-800/50 hover:bg-blue-500/20 hover:border-blue-500/40  border-transparent">
          <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-blue-400">
            Frontend Development
          </h3>
          <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-400">
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>Modern
              React Architectures
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
              Performance Optimization
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
              Responsive &amp; Interactive UIs
            </li>
          </ul>
        </div>
        <div className="p-4 md:p-6 rounded-lg transition-colors border-2 bg-gray-800/50 hover:bg-purple-500/20 hover:border-purple-500/40 border-transparent">
          <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-purple-400">
            Backend Development
          </h3>
          <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-400">
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>API
              Design &amp; Development
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
              Database Design
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
              Real-time Systems
            </li>
          </ul>
        </div>
        <div className="p-4 md:p-6 rounded-lg transition-colors border-2 bg-gray-800/50 hover:bg-teal-500/20 hover:border-teal-500/40 border-transparent">
          <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-teal-400">
            DevOps &amp; Cloud
          </h3>
          <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-400">
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>AWS
              Infrastructure
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>CI/CD
              Pipelines
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
              Scalable Architecture
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Skills
