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
import LandingPage from "./pages/LandingPage";


function App() {
  return (
    <div>
      <LandingPage />
    </div>
  );
}

export default App;
