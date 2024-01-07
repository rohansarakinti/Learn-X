import { Checkbox, Input, Button } from "@nextui-org/react"
import LearnX from "../assets/LearnX.png"


export default function LoginPage() {
  return (
    <div className="w-full h-screen flex flex-row">
        <div className="flex h-full basis-1/2 bg-sky-100 p-20 justify-center content-center">
            <div className="flex flex-col w-5/6 h-full bg-white rounded-2xl shadow-large p-12 animate-fade-in">
                <div className=" flex flex-col gap-5">
                    <h3 className="text-5xl">Login</h3>
                    <h1 className="text-xl">Continue your learning experience!</h1>
                    <div className=" flex flex-col w-full h-full gap-7 mt-7">
                        <Input  variant="bordered" type="email" label="Email" ></Input>
                        <Input variant="bordered" type="password" label="Password" ></Input>
                        <Checkbox color="primary">Remember Me?</Checkbox>
                    </div>
                </div>
                <div className=" flex flex-col justify-center items-center gap-5 mt-7">
                    <Button radius="full" size="lg" variant="shadow" color='primary' className='p-7 w-full'>LOGIN</Button>
                    <p className="text-xl">New to LearnX?<span><a href="/" className="text-xl text-sky-500 hover:text-sky-300 duration-500 underline ml-2">Join Now</a></span></p>
                </div>
            </div>
        </div>
        <div className="flex h-full basis-1/2 justify-center items-center">
            <img src={LearnX} className="bg-cover bg-center w-auto h-4/5 animate-fade-in"></img>
        </div>
    </div>
  )
}
