import Sidebar from "../components/Sidebar";

function Upload() {
  return (
    <div>
      <Sidebar />
      <div className="p-4 ml-64">
        <h2 className="text-4xl font-extrabold dark:text-white mb-4">
          Upload Your Notes
        </h2>

        <p className="text-left rtl:text-right text-gray-500 dark:text-gray-400 pb-4">
          Upload your notes here. Uploading your notes helps other students
          learn and can also help you learn. Please make sure that your notes
          are in required format. We appreciate your contribution to the
          community. We will send an email to you once your notes are approved
          by our moderators.
        </p>

        <div className="flex items-center justify-center w-full">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                PDF, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input id="dropzone-file" type="file" className="hidden" />
          </label>
        </div>
        <div className="flex justify-center">
          <button
            type="button"
            className="mt-10 mb-10 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Upload Your Notes
          </button>
        </div>
        <h2 className="text-4xl font-extrabold dark:text-white">
          Community Notes
        </h2>
      </div>
    </div>
  );
}

export default Upload;
