function Accounting() {
  return (
    <div>
      <div
        className="flex h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700 mb-5 mt-10 ml-10 mr-10"
        role="progressbar"
        aria-valuenow={0}
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
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
