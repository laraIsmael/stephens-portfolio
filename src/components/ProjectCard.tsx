import { Timeline } from "../components/TimelinePhotos";
import { FaExternalLinkAlt } from "react-icons/fa";

type TimelinePhoto = {
  photo: string;
  title: string;
};

export type Project = {
  title: string;
  subtitle?: string;
  link?: string;
  photos: string[];
  timelinePhotos?: TimelinePhoto[];
  bullets?: string[];
  narrative?: string;
  type: "work" | "personal";
};

type ProjectThumbnailCardProps = {
  imgSrc: string;
  title: string;
  company?: string;
};

export function ProjectThumbnailCard({
  imgSrc,
  title,
  company,
}: ProjectThumbnailCardProps) {
  return (
    <div className="bg-gray-100 shadow-md rounded-2xl overflow-hidden flex flex-col items-stretch">
      <div className="w-full h-64 flex items-center justify-center bg-gray-100">
        <img
          src={imgSrc}
          alt={title}
          className="max-w-full max-h-full object-contain"
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-teal-800">{title}</h3>
        {company && <p className="text-sm text-teal-600 mt-1">{company}</p>}
      </div>
    </div>
  );
}

type ProjectModalProps = {
  project: Project;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const {
    title,
    subtitle,
    link,
    photos,
    bullets,
    narrative,
    type,
    timelinePhotos,
  } = project;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-3xl font-bold z-50 hover:text-gray-300"
      >
        ×
      </button>

      <div className="relative bg-white rounded-xl shadow-2xl max-w-6xl w-full p-6 overflow-y-auto max-h-[90vh]">
        {/* Title Row */}
        <div className="flex justify-center items-center mb-6">
          <div className="mx-10">
            <h2 className="text-3xl font-bold text-teal-800">{title}</h2>
            {subtitle && type === "work" && (
              <h3 className="text-xl font-semibold text-teal-700">
                {subtitle}
              </h3>
            )}
          </div>
          {link && type === "work" && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 hover:text-teal-800 text-2xl"
              title="View Project"
            >
              <FaExternalLinkAlt />
            </a>
          )}
        </div>

        {/* Main Content: photos left + narrative/bullets right */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex flex-col gap-4 md:w-1/2">
            {photos.map((photo, idx) => (
              <div
                key={idx}
                className="w-full h-64 flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden"
              >
                <img
                  src={photo}
                  alt={`${title} photo ${idx + 1}`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>

          <div className="md:w-1/2 flex flex-col gap-4">
            {narrative && (
              <p className="text-teal-800 text-lg mb-6 leading-relaxed">
                {narrative}
              </p>
            )}
            {bullets && bullets.length > 0 && (
              <ul className="list-disc list-inside text-teal-800 text-lg leading-relaxed flex flex-col gap-2">
                {bullets.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Responsive Timeline */}
        {type === "personal" && timelinePhotos && timelinePhotos.length > 0 && (
          <Timeline timelinePhotos={timelinePhotos} />
        )}
      </div>
    </div>
  );
}
