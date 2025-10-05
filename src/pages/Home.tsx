export default function Home() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-6 text-center">
      {/* Hero */}
      <h1 className="text-5xl md:text-7xl font-bold text-teal-700 mb-4">
        Stephen Wilson
      </h1>
      <h2 className="text-2xl md:text-3xl text-gray-800 mb-6">
        Mechanical Design Engineer
      </h2>
      <p className="text-lg md:text-xl max-w-3xl text-gray-600 mb-10">
        Results-driven engineer with 7+ years of experience in{" "}
        <span className="font-semibold">medical devices</span>,{" "}
        <span className="font-semibold">robotics</span>, and{" "}
        <span className="font-semibold">product development</span>. Passionate
        about turning ideas into reality through hands-on prototyping,
        thoughtful design, and close collaboration.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        <a
          href="/projects"
          className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition"
        >
          View Projects
        </a>
        <a
          href="/resume"
          className="px-6 py-3 border border-teal-600 text-teal-600 rounded-lg hover:bg-teal-50 transition"
        >
          View Resume
        </a>
      </div>

      {/* Quick Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl">
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-teal-600 mb-2">
            Prototyping & Testing
          </h3>
          <p className="text-gray-600">
            Expertise in 3D printing, CNC machining, and rapid iteration to
            bring ideas to life.
          </p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-teal-600 mb-2">
            Cross-Functional Collaboration
          </h3>
          <p className="text-gray-600">
            Skilled in working with multidisciplinary teams to integrate
            mechanical, electrical, and software systems.
          </p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-teal-600 mb-2">
            Robotics & MedTech
          </h3>
          <p className="text-gray-600">
            Experience designing components for robotic-assisted surgery and
            medical device development.
          </p>
        </div>
      </div>
    </section>
  );
}
