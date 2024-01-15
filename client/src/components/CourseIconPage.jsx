import PropTypes from "prop-types";

function CourseIconPage({ title, courseDescription, imageLink }) {
  return (
    <div>
      <a
        href="#"
        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          className="w-120 h-96 md:h-full md:w-48 md:rounded-none md:rounded-s-lg p-5"
          src={imageLink}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {courseDescription}
          </p>
        </div>
      </a>
    </div>
  );
}
CourseIconPage.propTypes = {
  title: PropTypes.string.isRequired,
  courseDescription: PropTypes.string.isRequired,
  imageLink: PropTypes.string.isRequired,
};

export default CourseIconPage;
// Usage:
<CourseIconPage
  title="Introduction to React"
  courseDescription="Learn the basics of React.js"
/>;
