import { Input, Button } from "@nextui-org/react"
import LearnX from "../assets/LearnX.png"


export default function SignUpPage() {
  return (
    <div className="w-full h-screen flex flex-row">
        <div className="flex h-full basis-1/2 bg-sky-100 p-20 justify-center content-center">
            <div className="flex flex-col w-5/6 h-full bg-white rounded-2xl shadow-large p-12 animate-fade-in">
                <div className=" flex flex-col gap-5">
                    <h3 className="text-5xl">Sign Up</h3>
                    <h1 className="text-xl">Start your journey with LearnX!</h1>
                    <div className=" flex flex-col w-full h-full gap-10 mt-7">
                        <Input  variant="bordered" type="email" label="Email" ></Input>
                        <Input variant="bordered" type="password" label="Password" ></Input>
                    </div>
                </div>
                <div className=" flex flex-col justify-center items-center mt-20">
                    <Button radius="full" size="lg" variant="shadow" color='primary' className='p-7 w-full'>SIGN UP</Button>
                </div>
            </div>
        </div>
        <div className="flex h-full basis-1/2 justify-center items-center">
            <img src={LearnX} className="bg-cover bg-center w-auto h-4/5 animate-fade-in"></img>
        </div>
    </div>
  )
}
