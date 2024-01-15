import { Route, Routes } from "react-router-dom";

import SignUpPage from "./pages/SignUpPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import HeroPage from "./pages/HeroPage.jsx";
import CoursePage from "./pages/CoursePage.jsx";
import Upload from "./pages/Upload.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import TeacherSignUpPage from "./pages/TeacherSignUp.jsx";
import Accounting from "./pages/Accounting.jsx";
import Calc from "./pages/Calc.jsx";
import Algebra2 from "./pages/Algebra2.jsx";
import Geometry from "./pages/Geometry.jsx";
import HighSchool from "./pages/HighSchool.jsx";
import PersonalFiance from "./pages/PersonalFinance.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HeroPage />} />
      <Route path="/algebra2" element={<Algebra2 />} />
      <Route path="/geometry" element={<Geometry />} />
      <Route path="/highschool" element={<HighSchool />} />
      <Route path="/personal-finance" element={<PersonalFiance />} />
      <Route path="/accounting" element={<Accounting />} />
      <Route path="/home" element={<LandingPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/teachersignup" element={<TeacherSignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/upload" element={<Upload></Upload>}></Route>
      <Route path="/courses" element={<CoursePage></CoursePage>}></Route>
      <Route path="/contact" element={<ContactPage />}></Route>
      <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
      <Route path="/calculus" element={<Calc></Calc>}></Route>
    </Routes>
  );
}

export default App;
