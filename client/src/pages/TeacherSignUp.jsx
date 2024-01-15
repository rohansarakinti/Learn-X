import { Input, Button } from "@nextui-org/react"
import LearnX from "../assets/LearnX.png"
import { useState } from "react"


export default function TeacherSignUpPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const[formError, setFormError] = useState({
        email:"",
        password:""
    })

    
    function handleSignUp() {
        console.log(email)
        fetch('http://localhost:3000/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email: email, password: password, isTeacher: true}),
        })
        .then((response) => {
            if (response.status == 200) {
                window.location.replace("/login");
            }
            else if (response.status == 409){
                setFormError({
                    ...formError,
                    email: "Email already exists."
                })
            }
        })
    }

    const validateFormInput = (event) => {
        event.preventDefault();

        let inputError = {
            email: "",
            password:"",
        };

        if (!email && !password){
            setFormError({
                ...inputError,
                email: "Enter a valid email address",
                password: "Password should not be empty",
            });
            return;
        }

        if(!email || !email.includes("@") || !email.includes(".")){
            setFormError({
                ...inputError,
                email:"Enter a valid email address"
            });
            return;
            
        }

        if (!password) {
            setFormError({
                ...inputError,
                password: "Password should not be empty"
            });
            return;
        }

        if (password.length < 8 || password.length > 20 || password.includes(" ") || password.includes(".")) {
            setFormError({
                ...inputError,
                password: "Invalid Password: 8-20 characters, no spaces or periods"
            });
            return;
        }

        setFormError(inputError);
        handleSignUp();
    }

  return (
    <div className="w-full h-screen flex flex-row bg-white">
        <div className="flex h-full basis-full lg:basis-1/2 bg-sky-100 p-20 justify-center content-center">
            <div className="flex flex-col w-5/6 h-full bg-white rounded-2xl shadow-large p-12 animate-fade-in min-w-[22rem]">
                <div className=" flex flex-col gap-5">
                    <h3 className="text-5xl text-primary-content">Teacher Sign Up</h3>
                    <h1 className="text-xl text-primary-content">Start your journey with LearnX!</h1>
                    <div className=" flex flex-col w-full h-full gap-5 mt-7">
                        <Input  variant="bordered" type="email" label="Email" onInput={(e) => setEmail(e.target.value)} ></Input>
                        <p className="text-red-600">{formError.email}</p>
                        <Input variant="bordered" type="password" label="Password" onInput={(e) => setPassword(e.target.value)} ></Input>
                        <p className="text-red-600">{formError.password}</p>
                    </div>
                </div>
                <div className=" flex flex-col justify-center items-center gap-8 mt-5">
                    <Button radius="full" size="lg" variant="shadow" color='primary' className='p-7 w-full' onClick={validateFormInput}>SIGN UP</Button>
                    <p className="text-xl text-center text-primary-content">Already have an account?<span><a href="/login" className="text-xl text-center text-sky-500 hover:text-sky-300 duration-500 underline ml-2">Login Now</a></span></p>
                </div>
            </div>
        </div>
        <div className="hidden lg:flex h-full basis-1/2 justify-center items-center">
            <a href="/home"><img src={LearnX} className="bg-cover bg-center w-auto h-4/5 animate-fade-in"></img></a>
        </div>
        
    </div>
  )
}
