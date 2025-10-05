import ProjectCard from "../components/ProjectCard";
import Pic1 from "../assets/Picture1.jpg";
import Pic2 from "../assets/Picture2.png";

// Example project data
const workProjects = [
  {
    title: "“Palladium” Diagnostic System",
    link: "https://citomedical.com/portfolio/cs-8-palladium/",
    photos: [Pic1, Pic2],
    bullets: [
      "Designed injection-molded housing and snap-fit assemblies",
      "Liaised with PCB/electrical team, spec’d motors & components",
      "Supported prototyping and validation of 20+ functional units",
      "Delivered manufacturable design ready for production",
    ],
    narrative:
      "Led the mechanical design of the “Palladium” diagnostic platform, focusing on the housing, assembly, and manufacturability of injection-molded components. Partnered with industrial design to preserve form factor and user workflow, while integrating electronics and mechanical systems for seamless functionality. Oversaw prototyping, testing, and verification to validate reliability and prepare for scaled manufacturing.",
  },
  // ...more work projects
];

const personalProjects = [
  {
    title: "3D Printed Gadgets",
    photos: ["/assets/gadget1.jpg"],
    bullets: [
      "Created functional gadgets for daily use",
      "Optimized designs for 3D printing",
    ],
    narrative: "Experimented with various mechanisms and materials.",
  },
  // ...more personal projects
];

export default function Projects() {
  return (
    <section className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-teal-800 mb-12 text-center">
          Projects
        </h1>

        {/* Work Projects */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-teal-800 mb-6">
            Work Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {workProjects.map((proj, idx) => (
              <ProjectCard key={idx} {...proj} />
            ))}
          </div>
        </div>

        {/* Personal Projects */}
        <div>
          <h2 className="text-2xl font-bold text-teal-800 mb-6">
            Personal Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {personalProjects.map((proj, idx) => (
              <ProjectCard key={idx} {...proj} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
