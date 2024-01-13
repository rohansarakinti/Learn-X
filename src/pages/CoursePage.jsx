import CourseIconPage from "../components/CourseIconPage";
import Sidebar from "../components/Sidebar";

function CoursePage() {
  return (
    <div>
      <Sidebar />
      <div className="p-4 sm:ml-64">
        <CourseIconPage
          title="SAT Prep"
          courseDescription="Prepare for the SAT with LearnX Instructors"
        ></CourseIconPage>
      </div>
    </div>
  );
}

export default CoursePage;
