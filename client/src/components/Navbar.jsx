import { Navbar as Nav, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from '@nextui-org/react'
import Logo from "../assets/LearnXIcon.png"

export default function Navbar() {
  return ( 
    <div className='bg-white'>
        <Nav className='animate-fade-down bg-white' isBordered>
            <NavbarBrand className='cursor-pointer' onClick={() => {
                window.location.replace("/")
            }}><img src={Logo} width={70} className='mt-2'></img>
            </NavbarBrand>
            <NavbarContent className=' sm:flex gap-10' justify='center' >
                
                <NavbarItem>
                    <Link color='primary' href='/home'>
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color='primary' href='/login'>
                        Login
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color='primary' href='/contact'>
                        Contact
                    </Link>
                </NavbarItem>
                
                
            </NavbarContent>
            <NavbarContent className="sm:flex gap-10" justify='end'>
                <NavbarItem>
                    <Link color='primary' href='/teachersignup'>
                        Teachers
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="primary" href="/signup" variant="bordered">
                        Sign Up
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Nav>
    </div>
  )
}
