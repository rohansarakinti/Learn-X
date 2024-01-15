import { useState } from "react";

const youtubeUrls = [
  "https://www.youtube.com/watch?v=Bt4nYxZ5yTw",
  "https://www.youtube.com/watch?v=D9BvvD86UOk",
  "https://www.youtube.com/watch?v=j1VK66Z3Kzs",
  "https://www.youtube.com/watch?v=70y6wu99ch0",
];

function Accounting() {
  const [progress, setProgress] = useState(0);
  const progressIncrement = 100 / youtubeUrls.length;

  const handleNext = () => {
    if (progress + progressIncrement <= 100) {
      setProgress(progress + progressIncrement);
    }
  };

  return (
    <div>
      <div
        className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700"
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div
          className="flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div
        id="custom-controls-gallery"
        className="relative w-full"
        data-carousel="slide"
      >
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96 ease-in-out">
          {youtubeUrls.map((url, index) => (
            <iframe
              key={index}
              title={`YouTube Video ${index + 1}`}
              width="100%"
              height="100%"
              src={url.replace("watch?v=", "embed/")}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          ))}
        </div>
        <div className="flex justify-center items-center pt-4">
          <button
            type="button"
            className="flex justify-center items-center me-4 h-full cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span className="text-gray-400 hover:text-gray-900 dark:hover:text-white group-focus:text-gray-900 dark:group-focus:text-white">
              <svg
                className="rtl:rotate-180 w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 5H1m0 0 4 4M1 5l4-4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="flex justify-center items-center h-full cursor-pointer group focus:outline-none"
            data-carousel-next
            onClick={handleNext}
          >
            <span className="text-gray-400 hover:text-gray-900 dark:hover:text-white group-focus:text-gray-900 dark:group-focus:text-white">
              <svg
                className="rtl:rotate-180 w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Accounting;
