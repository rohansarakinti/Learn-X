import CourseIconPage from "../components/CourseIconPage";
import Sidebar from "../components/Sidebar";
import Account from "../assets/Account.png";
import algebra2 from "../assets/Algebra2.png";
import highschool from "../assets/Highschool Courses.png";
import geometry from "../assets/Geometry.png";
import calc from "../assets/Calc.png";
import pfn from "../assets/PersonalFinance.png";

function CoursePage() {
  const courses = [
    {
      title: "Accounting",
      courseDescription: "Learn about Accounting with LearnX Instructors",
      imageLink: { Account },
      route: "/accounting",
    },
    {
      title: "Algebra 2",
      courseDescription: "Learn about Algebra 2 with LearnX Instructors",
      imageLink: { algebra2 },
      route: "/algebra2",
    },
    {
      title: "Geometry",
      courseDescription: "Learn about Geometry with LearnX Instructors",
      imageLink: { geometry },
      route: "/geometry",
    },
    {
      title: "High School Courses",
      courseDescription:
        "Learn about High School Course Selections with LearnX Instructors",
      imageLink: { highschool },
      route: "/highschool",
    },
    {
      title: "Calculus 1 + 2",
      courseDescription: "Learn about Calculus with LearnX Instructors",
      imageLink: { calc },
      route: "/calculus",
    },
    {
      title: "Personal Financial Literacy",
      courseDescription: "Learn about Personal Finance with LearnX Instructors",
      imageLink: { pfn },
      route: "/personal-finance",
    },
  ];

  return (
    <div className="w-full">
      <Sidebar />
      <div className="p-4 sm:ml-64">
        {courses.map((course, index) => (
          <CourseIconPage
            key={index}
            title={course.title}
            courseDescription={course.courseDescription}
            imageLink={course.imageLink}
            to={course.href}
          />
        ))}
      </div>
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 justify-center focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={() => "my_modal_1".showModal()}
      >
        Add More Courses
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">SignUp for more courses</h3>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Class Name
            </label>
            <input
              type="shorttext"
              name="shorttext"
              id="shorttext"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Accounting"
              required=""
            />
          </div>
          <p className="py-4">Or enter the class code</p>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Class Code
            </label>
            <input
              type="shorttext"
              name="shorttext"
              id="shorttext"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="X2Y3Z4"
              required=""
            />
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default CoursePage;
