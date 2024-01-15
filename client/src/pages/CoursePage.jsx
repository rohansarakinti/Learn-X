import CourseIconPage from "../components/CourseIconPage";
import Sidebar from "../components/Sidebar";
import Account from "../assets/Account.png";
import algebra2 from "../assets/Algebra2.png";
import highschool from "../assets/Highschool Courses.png";
import geometry from "../assets/Geometry.png";
import calc from "../assets/Calc.png";
import pfn from "../assets/PersonalFinance.png";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

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
          <Link to={course.route} key={index}>
            <CourseIconPage
              title={course.title}
              courseDescription={course.courseDescription}
              imageLink={course.imageLink}
            />
          </Link>
        ))}
      </div>
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        Add More Courses
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
      <Footer />
    </div>
  );
}

export default CoursePage;
