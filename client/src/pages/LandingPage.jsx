import { Button, Card, CardBody, Image, CardFooter } from "@nextui-org/react";
import Navbar from "../components/Navbar";
import uploadIcon from "../assets/uploadIcon.jpg";
import videoIcon from "../assets/videoIcon.jpg";
import quizIcon from "../assets/quizIcon.jpg";
import certifIcon from "../assets/certifIcon.jpg";
import Calc from "../assets/Calc.png";
import Geometry from "../assets/Geometry.png"
import Finance from "../assets/PersonalFinance.png"
import { Accordion, AccordionItem } from "@nextui-org/react";
import Footer from "../components/Footer";
import cardImgLanding from "../assets/cardImgLanding.jpg"

export default function LandingPage() {
  const list = [
    {
      title: "Calculus",
      img: {Calc},
      desc: "Use our Calc course!",
    },
    {
      title: "Geometry",
      img: {Geometry},
      desc: "Use our Geometry course!",
    },
    {
      title: "Finance",
      img: {Finance},
      desc: "Use our Finance course!",
    },
  ];

  return (
    <div className="bg-white">
      <Navbar />
      <div className="bg-[url('./assets/landing-page-bg.jpg')] h-screen bg-cover bg-center flex justify-center items-center">
        <div className="flex h-1/5 w-2/6 mr-7 mb-52 justify-center">
          <div className="bg-[url('./assets/LearnX.png')] h-auto w-full bg-cover bg-center flex justify-center animate-fade-up min-w-[22rem]"></div>
        </div>
        <Button
          radius="full"
          size="lg"
          variant="shadow"
          color="primary"
          className="absolute ml-auto mr-10 animate-fade-up"
          onClick={() => {
            window.location.replace("/login");
          }}
        >
          GET STARTED
        </Button>
      </div>
      <div className="w-full flex justify-center content-center bg-white">
        <div className=" w-4/5 flex flex-col justify-center items-center">
          <h3 className="text-5xl text-center text-primary-content">A Variety of Courses...</h3>

          <div className="gap-8 grid lg:grid-cols-3 md:grid-cols-2 justify-center w-full mt-12">
            {list.map((item, index) => (
              <Card shadow="sm" className="min-w-[300px]" key={index}>
                <CardBody className="overflow-visible p-0">
                  <Image
                    shadow="sm"
                    radius="lg"
                    width="100%"
                    alt={item.title}
                    className="w-full object-cover h-[350px]"
                    src={item.img}
                  />
                </CardBody>
                <CardFooter className="text-small justify-between">
                  <b>{item.title}</b>
                  <p className="text-default-500">{item.desc}</p>
                </CardFooter>
              </Card>
            ))}
          </div>

          <Button
            radius="full"
            size="lg"
            variant="shadow"
            color="primary"
            className="ml-auto mr-auto mt-20 p-7"
          >
            EXPLORE NOW
          </Button>
        </div>
      </div>
      <div className="w-full flex mt-52 bg-white">
        <div className="w-full flex flex-row">
          <div className="basis-2/5 w-52 h-[600px]">
            <Card className="hidden max-w-5/6 w-5/6 h-full ml-7 mt-32 lg:block"><img src={cardImgLanding}></img></Card>
          </div>
          <div className="basis-3/5 flex flex-col">
            <h3 className="text-5xl text-primary-content">Why LearnX is Better</h3>
            <div className="w-full h-full flex flex-col gap-10 mt-24">
              <div className="flex flex-row w-full h-5 basis-1/4">
                <div className="basis-1/6">
                  <img src={videoIcon}></img>
                </div>
                <div className="basis-5/6 flex flex-col ml-7">
                  <div className="basis-1/2">
                    <h3 className="text-3xl text-primary-content">Videos</h3>
                  </div>
                  <div className="basis-1/2">
                    <h3 className="text-xl text-primary-content">
                      Videos explaining concepts in a simple yet elaborate
                      manner.
                    </h3>
                  </div>
                </div>
              </div>

              <div className="flex flex-row w-full h-5 basis-1/4">
                <div className="basis-1/6">
                  <img src={quizIcon}></img>
                </div>
                <div className="basis-5/6 flex flex-col ml-7">
                  <div className="basis-1/2">
                    <h3 className="text-3xl text-primary-content">Quizzes</h3>
                  </div>
                  <div className="basis-1/2">
                    <h3 className="text-xl text-primary-content">
                      Quizzes to test your knowledge on topics and utilize
                      practice-based learning.
                    </h3>
                  </div>
                </div>
              </div>

              <div className="flex flex-row w-full h-5 basis-1/4">
                <div className="basis-1/6">
                  <img src={uploadIcon}></img>
                </div>
                <div className="basis-5/6 flex flex-col ml-7">
                  <div className="basis-1/2">
                    <h3 className="text-3xl text-primary-content">Uploaded Notes</h3>
                  </div>
                  <div className="basis-1/2">
                    <h3 className="text-xl text-primary-content">
                      Have not just teachers, but also peers upload notes to
                      bring in new perspectives on a topic.
                    </h3>
                  </div>
                </div>
              </div>

              <div className="flex flex-row w-full h-5 basis-1/4">
                <div className="basis-1/6">
                  <img src={certifIcon}></img>
                </div>
                <div className="basis-5/6 flex flex-col ml-7">
                  <div className="basis-1/2">
                    <h3 className="text-3xl text-primary-content">Completion Certificates</h3>
                  </div>
                  <div className="basis-1/2">
                    <h3 className="text-xl text-primary-content">
                      Receive a certificate on completion to show credibility
                      and proof of mastery.
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <Button
              radius="full"
              size="lg"
              variant="shadow"
              color="primary"
              className=" p-7 mt-20 mr-10"
            >
              TRY LEARNX FOR FREE
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full h-[50px]"></div>
      {/* <div className="w-full flex flex-col bg-sky-100 justify-center content-center items-center p-28">
        <h3 className="text-5xl">Content Provided By</h3>
        <img className="rounded-full p-16" src={MasterHSIcon}></img>
        <Button
          radius="full"
          size="lg"
          variant="shadow"
          color="primary"
          className="p-7"
        >
          SIGNUP FOR A FREE ACCOUNT
        </Button>
      </div> */}
      <div className="w-full flex flex-col p-14 items-center">
        <h3 className="text-5xl text-primary-content">FAQs</h3>
        <div className="w-full flex">
          <Accordion>
            <AccordionItem key="1" aria-label="Accordion 1" title="FAQ 1">
              The answer to FAQ number one.
            </AccordionItem>
            <AccordionItem key="2" aria-label="Accordion 2" title="FAQ 2">
              The answer to FAQ number two.
            </AccordionItem>
            <AccordionItem key="3" aria-label="Accordion 3" title="FAQ 3">
              The answer to FAQ number three.
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <Footer />
    </div>
  );
}
