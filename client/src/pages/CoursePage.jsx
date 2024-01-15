import CourseIconPage from "../components/CourseIconPage";
import Sidebar from "../components/Sidebar";
import Account from "../assets/Account.png";
import algebra2 from "client/src/assets/Algebra2.png";
import highschool from "client/src/assets/Highschool Courses.png";
import geometry from "client/src/assets/Geometry.png";
import calc from "client/src/assets/Calc.png";
import pfn from "client/src/assets/PersonalFinance.png";

function CoursePage() {
  const courses = [
    {
      title: "Account",
      courseDescription: "Learn about Account with LearnX Instructors",
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
    <div>
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
    </div>
  );
}

export default CoursePage;
