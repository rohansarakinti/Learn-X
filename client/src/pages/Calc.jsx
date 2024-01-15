import { Link } from "react-router-dom";

// import finalq1 from "../videos/finalq1.mkv";
// import finalq2 from "../videos/finalq2.mkv";
// import finalq3 from "../videos/finalq3.mkv";
// import finalq5 from "../videos/finalq5.mkv";
// import finalq6 from "../videos/finalq6.mkv";
// import finalq7 from "../videos/finalq7.mkv";

import video1 from "../videos/2.1.mp4";
// import video2 from "../videos/2.1intro.mkv";
import video3 from "../videos/2.2.2a.mp4";
// import video4 from "../videos/2.2.2b.mkv";
// import video5 from "../videos/2.2.2c.mkv";

const youtubeUrls = [
  // finalq1,
  // finalq2,
  // finalq3,
  // finalq5,
  // finalq6,
  // finalq7,
  video1,
  // video2,
  video3,
  // video4,
  // video5,
];

function Calc() {
  return (
    <div>
      <Link to="/courses">
        <button
          type="button"
          className=" mt-10 ml-10 w-full flex items-center mb-5 justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700"
        >
          <svg
            className="w-5 h-5 rtl:rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
            />
          </svg>
          <span>Go back</span>
        </button>
      </Link>
      <div className="carousel w-full">
        {youtubeUrls.map((url, index) => (
          <div
            id={`item${index + 1}`}
            className="carousel-item w-full"
            key={index}
          >
            <iframe
              width="800"
              height="450"
              className="mx-auto"
              src={url}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        {youtubeUrls.map((_, index) => (
          <a href={`#item${index + 1}`} className="btn btn-xs" key={index}>
            {index + 1}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Calc;
