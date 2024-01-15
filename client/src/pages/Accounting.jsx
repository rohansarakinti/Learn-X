import { Link } from "react-router-dom";
function Accounting() {
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
        <div id="item1" className="carousel-item w-full">
          <iframe
            width="800"
            height="450"
            className="mx-auto"
            src="https://www.youtube.com/embed/Bt4nYxZ5yTw"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div id="item2" className="carousel-item w-full">
          <iframe
            width="800"
            height="450"
            className="mx-auto"
            src="https://www.youtube.com/embed/D9BvvD86UOk"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div id="item3" className="carousel-item w-full">
          <iframe
            width="800"
            height="450"
            className="mx-auto"
            src="https://www.youtube.com/embed/j1VK66Z3Kzs"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div id="item4" className="carousel-item w-full">
          <iframe
            width="800"
            height="450"
            className="mx-auto"
            src="https://www.youtube.com/embed/70y6wu99ch0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
}

export default Accounting;
