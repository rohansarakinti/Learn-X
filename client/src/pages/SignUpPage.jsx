import { Input, Button } from "@nextui-org/react"
import LearnX from "../assets/LearnX.png"
import { useState } from "react"

export default function SignUpPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    
    function handleSignUp() {
        console.log(email)
        fetch('http://localhost:3000/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email: email, password: password}),
        })
        .then((response) => {
            if (response.status == 200) {
                window.location.replace("/login");
            }
        })
    }

  return (
    <div className="w-full h-screen flex flex-row">
        <div className="flex h-full basis-full lg:basis-1/2 bg-sky-100 p-20 justify-center content-center">
            <div className="flex flex-col w-5/6 h-full bg-white rounded-2xl shadow-large p-12 animate-fade-in min-w-[22rem]">
                <div className=" flex flex-col gap-5">
                    <h3 className="text-5xl">Sign Up</h3>
                    <h1 className="text-xl">Start your journey with LearnX!</h1>
                    <div className=" flex flex-col w-full h-full gap-10 mt-7">
                        <Input  variant="bordered" type="email" label="Email" onInput={(e) => setEmail(e.target.value)} ></Input>
                        <Input variant="bordered" type="password" label="Password" onInput={(e) => setPassword(e.target.value)} ></Input>
                    </div>
                </div>
                <div className=" flex flex-col justify-center items-center gap-8 mt-10">
                    <Button radius="full" size="lg" variant="shadow" color='primary' className='p-7 w-full' onClick={handleSignUp}>SIGN UP</Button>
                    <p className="text-xl text-center">Already have an account?<span><a href="/login" className="text-xl text-center text-sky-500 hover:text-sky-300 duration-500 underline ml-2">Login Now</a></span></p>
                </div>
            </div>
        </div>
        <div className="hidden lg:flex h-full basis-1/2 justify-center items-center">
            <a href="/home"><img src={LearnX} className="bg-cover bg-center w-auto h-4/5 animate-fade-in"></img></a>
        </div>
    </div>
  )
}
