import { FaExternalLinkAlt } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  link?: string;
  photos?: string[]; // array of image paths
  bullets?: string[]; // bullet points
  narrative?: string; // descriptive paragraph
}

export default function ProjectCard({
  title,
  link,
  photos,
  bullets,
  narrative,
}: ProjectCardProps) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col">
      {/* Title + Link */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-teal-800">{title}</h3>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-600 hover:underline flex items-center"
          >
            <FaExternalLinkAlt className="w-4 h-4 ml-1" />
          </a>
        )}
      </div>

      {/* Photos */}
      {photos && photos.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          {photos.map((photo, idx) => (
            <div key={idx} className="w-full h-64 overflow-hidden rounded-lg">
              <img
                src={photo}
                alt={`${title} photo ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      )}

      {/* Narrative */}
      {narrative && <p className="text-teal-700 mb-4">{narrative}</p>}

      {/* Bullet points */}
      {bullets && bullets.length > 0 && (
        <ul className="list-disc list-inside text-teal-700 space-y-1">
          {bullets.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
