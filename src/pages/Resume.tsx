import { FaDownload } from "react-icons/fa";
import ResumePDF from "../assets/StephenWilsonResume.pdf";

export default function Resume() {
  return (
    <section className="min-h-screen bg-gray-50 px-6 py-16 flex justify-center">
      <div className="max-w-4xl w-full">
        {/* Header with Download */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h1 className="text-4xl font-extrabold text-teal-800 mb-2">
              Stephen Wilson
            </h1>
            <p className="text-teal-700">
              Santa Cruz, CA 95060 | (831) 430-6009 |{" "}
              <a
                href="mailto:stephenlw@mac.com"
                className="text-teal-700 hover:underline"
              >
                stephenlw@mac.com
              </a>
            </p>
          </div>

          <a
            href={ResumePDF}
            download
            className="inline-flex items-center bg-teal-600 text-white px-5 py-3 rounded-lg hover:bg-teal-700 transition-colors"
          >
            <FaDownload className="w-5 h-5 mr-2" />
            Download Resume
          </a>
        </div>

        {/* Professional Summary */}
        <div className="mb-10 bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold text-teal-800 mb-4">
            Professional Summary
          </h2>
          <p className="text-teal-700 mb-2">
            Mechanical Design Engineer – Product Development.
          </p>
          <p className="text-teal-700 leading-relaxed">
            Results-driven Mechanical Engineer with 7+ years of experience in
            medical devices, robotics, and R&D, specializing in rapid
            prototyping and hands-on design/build/test cycles. Adept at
            collaborating across disciplines to deliver integrated solutions in
            fast-paced, startup-style environments.
          </p>
        </div>

        {/* Work Experience */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-teal-800 mb-6">
            Work Experience
          </h2>

          {/* Johnson & Johnson MedTech */}
          <div className="mb-6 bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold text-teal-800">
              Johnson & Johnson MedTech: Santa Clara, CA
            </h3>
            <p className="text-teal-700 mb-2">
              Mechanical Design Engineer | Feb 2023 – Jul 2025
            </p>
            <ul className="list-disc list-inside text-teal-700 space-y-1">
              <li>
                Contributed to the design and verification of robotic-assisted
                surgical systems, integrating mechatronic components and
                electromechanical subsystems
              </li>
              <li>
                Spearheaded iterative prototyping and hands-on testing of over
                30 custom test fixtures for robotic platforms
              </li>
              <li>
                Drove cross-functional integration with software and electrical
                teams to validate motion and sensing systems
              </li>
              <li>
                Applied design for manufacturability (DFM), tolerance stack-up,
                GD&T, and mechanical design principles to robust fixture
                development
              </li>
            </ul>
          </div>

          {/* Cito Medical */}
          <div className="mb-6 bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold text-teal-800">
              Cito Medical: Santa Cruz, CA
            </h3>
            <p className="text-teal-700 mb-2">
              Mechanical Design Engineer | May 2017 – Dec 2021
            </p>
            <ul className="list-disc list-inside text-teal-700 space-y-1">
              <li>
                Led mechanical design of medical products and test fixtures from
                concept through pilot builds, focusing on user experience,
                manufacturing, and industrial design
              </li>
              <li>
                Interfaced with clients, vendors, and multidisciplinary teams to
                meet project goals and compliance standards
              </li>
              <li>
                Utilized 3D printing, CNC machining, FEA, and general shop
                equipment for rapid prototyping and testing in a startup-style
                environment
              </li>
              <li>
                Managed small project teams, led design reviews, and maintained
                project schedules and BOMs
              </li>
            </ul>
          </div>

          {/* Oxford Instruments */}
          <div className="mb-6 bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold text-teal-800">
              Oxford Instruments: Scotts Valley, CA
            </h3>
            <p className="text-teal-700 mb-2">
              Manufacturing Engineer | Sep 2016 – Mar 2017
            </p>
            <ul className="list-disc list-inside text-teal-700 space-y-1">
              <li>
                Implemented production line improvements and created work
                instructions, test procedures, and production standards
              </li>
              <li>
                Designed jigs and fixtures in CAD to support production and
                improve workflow
              </li>
              <li>
                Supported last-minute subassembly design updates and
                collaborated with production staff for efficient implementation
              </li>
            </ul>
          </div>

          {/* FOX Factory */}
          <div className="mb-6 bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold text-teal-800">
              FOX Factory: Scotts Valley, CA
            </h3>
            <p className="text-teal-700 mb-2">
              CMM Programmer | Feb 2016 – Sep 2016
            </p>
            <ul className="list-disc list-inside text-teal-700 space-y-1">
              <li>
                Programmed, set up, calibrated, and maintained CMMs to support
                quality assurance and process improvements
              </li>
              <li>
                Streamlined inspection workflows with automated routines and
                designed custom gauges
              </li>
              <li>
                Supported engineering and QA with actionable metrology data
              </li>
            </ul>
          </div>
        </div>

        {/* Education */}
        <div className="mb-10 bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold text-teal-800 mb-4">Education</h2>
          <ul className="text-teal-700 space-y-2">
            <li>
              <span className="font-semibold">
                Saint Martin's University: Lacey, WA
              </span>{" "}
              – Bachelor of Science, Mechanical Engineering | Aug 2011 – May
              2015
            </li>
            <li>
              <span className="font-semibold">
                University of Duisburg-Essen: Duisburg, Germany
              </span>{" "}
              – Business, Economics, German Language | May – Jun 2013
            </li>
          </ul>
        </div>

        {/* Leadership & Activities */}
        <div className="mb-10 bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold text-teal-800 mb-4">
            Leadership & Activities
          </h2>
          <p className="text-teal-700">
            American Society of Mechanical Engineers (ASME) – Co-President
          </p>
          <ul className="list-disc list-inside text-teal-700 mt-2">
            <li>
              Led student team and managed $4500 budget to facilitate hands-on
              engineering activities
            </li>
            <li>
              Organized industry panels and campus events to connect students
              with working engineers
            </li>
          </ul>
        </div>

        {/* Technical Skills */}
        <div className="mb-10 bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold text-teal-800 mb-4">
            Technical Skills
          </h2>
          <p className="text-teal-700">
            SolidWorks, OnShape, FEA, GD&T, Tolerance Stack-Up, Design for
            Manufacturability (DFM), Root Cause Analysis, Rapid Prototyping,
            Electromechanical Assembly, 3D Printing, CNC Machining, MS Office
            Suite, EIT Certificate (CA)
          </p>
        </div>

        {/* Interests */}
        <div className="mb-10 bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold text-teal-800 mb-4">Interests</h2>
          <p className="text-teal-700">
            Mountain biking, trail-building, motocross, tinkering with machines,
            snowboarding, traveling
          </p>
        </div>
      </div>
    </section>
  );
}
