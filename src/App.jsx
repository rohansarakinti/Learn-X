import { Route, Routes } from "react-router-dom";

import SignUpPage from "./pages/SignUpPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import HeroPage from "./pages/HeroPage.jsx";
import CoursePage from "./pages/CoursePage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HeroPage />} />
      <Route path="/home" element={<LandingPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/coursePage" element={<CoursePage></CoursePage>}></Route>
    </Routes>
  );
}

export default App;
