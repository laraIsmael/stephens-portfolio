import { Link } from "react-router-dom";
import StephenProfile from "../assets/StephenProfile.png";

export default function About() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-6 py-16">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8 items-center">
        {/* Photo / Placeholder */}
        <div className="flex justify-center mb-18">
          <div className="w-106 h-106 flex items-center justify-center text-gray-500">
            <img src={StephenProfile} alt="Profile photo" />
          </div>
        </div>

        {/* About Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-teal-700 mb-6">
            About Me
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Born in England and raised in Santa Cruz, I’ve always been drawn to
            exploring how things work—whether on the trail as an avid mountain
            biker and builder or in the workshop bringing ideas to life.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            I studied Mechanical Engineering at Saint Martin’s University, where
            I built a strong foundation in design and problem-solving. Since
            then, I’ve spent over seven years as a mechanical design engineer,
            developing solutions in medical devices, robotics, and product
            development.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            My passion lies in turning ideas into reality through hands-on
            prototyping, thoughtful design, and close collaboration with
            multidisciplinary teams.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <Link
              to="/projects"
              className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition"
            >
              View Projects
            </Link>
            <Link
              to="/resume"
              className="px-6 py-3 border border-teal-600 text-teal-600 rounded-lg hover:bg-teal-50 transition"
            >
              View Resume
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
