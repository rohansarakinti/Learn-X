import Navbar from "../components/Navbar";
import { Button } from "@nextui-org/react";
import "./animations/index.css";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <Navbar />
      <div className="w-full h-full flex bg-gradient-to-r from-sky-500 to-white to-75%">
        <div className="w-1/2 h-full flex flex-col gap-10 justify-center px-20">
          <h1 className="text-6xl font-normal text-white ">
            Unlock Your Potential
          </h1>
          <h1 className="text-3xl font-normal text-white">
            Utilize LearnX as your gateway to knowledge and growth!
          </h1>
          <Button color="primary" className="w-1/3 ">
            {" "}
            Start Now !{" "}
          </Button>
        </div>
        <div className="w-1/2 h-full flex justify-center items-center fadeInBottom">
          <img src="src\assets\LearnX.png"></img>
        </div>
      </div>
      <Footer />
    </div>
  );
}
