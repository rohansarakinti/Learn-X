import { Checkbox, Input, Button } from "@nextui-org/react"
import LearnX from "../assets/LearnX.png"
import Cookies from 'universal-cookie';
import { useState } from "react"


const cookies = new Cookies();

export default function LoginPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [formError, setFormError] = useState({
        "badCredentials": ""
    });

    function handleLogin() {
        fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email: email, password: password}),
        })
        .then((response) => {
            if (response.status === 200) {
                response.text().then((body) => {
                    const responseBody = body.toString(); // Convert response body to a string
                    cookies.set('token', responseBody, { path: '/' });
                    window.location.replace("/dashboard");
                });
            }
            else if (response.status === 401){
                setFormError({
                    ...formError,
                    badCredentials: "Incorrect email or password."
                })
            }
        })
    }

  return (
    <div className="w-full h-screen flex flex-row bg-white">
        <div className="flex h-full basis-full lg:basis-1/2 bg-sky-100 p-20 justify-center content-center">
            <div className="flex flex-col w-5/6 h-full bg-white rounded-2xl shadow-large p-12 animate-fade-in min-w-[22rem]">
                <div className=" flex flex-col gap-5">
                    <h3 className="text-5xl text-primary-content">Login</h3>
                    <h1 className="text-xl text-primary-content">Continue your learning experience!</h1>
                    <div className=" flex flex-col w-full h-full gap-7 mt-7">
                        <Input  variant="bordered" type="email" label="Email" onInput={(e) => setEmail(e.target.value)}></Input>
                        <p className="text-red-600">{formError.badCredentials}</p>
                        <Input variant="bordered" type="password" label="Password" onInput={(e) => setPassword(e.target.value)} ></Input>
                        <Checkbox color="primary">Remember Me?</Checkbox>
                    </div>
                </div>
                <div className=" flex flex-col justify-center items-center gap-5 mt-7">
                    <Button radius="full" size="lg" variant="shadow" color='primary' className='p-7 w-full' onClick={handleLogin}>LOGIN</Button>
                    <p className="text-xl text-primary-content">New to LearnX?<span><a href="/signup" className="text-xl text-sky-500 hover:text-sky-300 duration-500 underline ml-2">Join Now</a></span></p>
                </div>
            </div>
        </div>
        <div className="hidden lg:flex h-full basis-1/2 justify-center items-center">
            <a href="/home"><img src={LearnX} className="bg-cover bg-center w-auto h-4/5 animate-fade-in"></img></a>
        </div>
    </div>
  )
}
