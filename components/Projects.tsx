import React from 'react'

const Projects = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold mb-12">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-11/12 lg:w-2/3">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="p-6 bg-secondary rounded-lg">
            <h3 className="text-2xl font-semibold">Project {i + 1}</h3>
            <p className="mt-2 text-lightGray">Brief description of the project.</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
