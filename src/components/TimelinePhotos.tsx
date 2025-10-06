import React from "react";

export type TimelinePhoto = {
  photo: string;
  title: string;
};

type TimelineProps = {
  timelinePhotos: TimelinePhoto[];
};

export function Timeline({ timelinePhotos }: TimelineProps) {
  // Number of cards per row
  const cardsPerRow = 3;
  const rows = [];

  // Split timelinePhotos into rows of 3
  for (let i = 0; i < timelinePhotos.length; i += cardsPerRow) {
    rows.push(timelinePhotos.slice(i, i + cardsPerRow));
  }

  return (
    <div className="mt-10 flex flex-col gap-6">
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="flex justify-center items-center gap-6 flex-wrap"
        >
          {row.map((item, idx) => (
            <React.Fragment key={idx}>
              <div className="flex flex-col items-center bg-gray-50 p-4 rounded-lg shadow-sm w-64 h-80">
                <div className="w-full h-64 flex items-center justify-center overflow-hidden">
                  <img
                    src={item.photo}
                    alt={item.title}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <span className="font-medium text-teal-700 mt-2 text-center">
                  {item.title}
                </span>
              </div>

              {/* Horizontal arrow only if not the last card in the row */}
              {idx < row.length - 1 && (
                <div className="hidden sm:flex items-center">
                  <span className="text-teal-700 text-2xl">→</span>
                </div>
              )}
            </React.Fragment>
          ))}

          {/* Down arrow to indicate next row (mobile only) */}
          {rowIndex < rows.length - 1 && (
            <div className="flex justify-center w-full mt-2 sm:hidden">
              <span className="text-teal-700 text-2xl">↓</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
