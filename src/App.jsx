// import { createBrowserRouter, RouterProvider }  from "react-router-dom";
// import { NextUIProvider } from "@nextui-org/react";
// import Home from "./pages/Home";

// export default function App() {
//   const router = createBrowserRouter([
//     {
//       path: '/',
//       element: <Home />,
//     },
//   ])
//   return(
//     <NextUIProvider>
//       <RouterProvider router={router}></RouterProvider>
//     </NextUIProvider>
//   )
// }
import CourseIcon from "./components/CourseIcon";
function App() {
  return (
    <div>
      <CourseIcon></CourseIcon>
    </div>
  );
}

export default App;
