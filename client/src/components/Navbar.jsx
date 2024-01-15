import { Navbar as Nav, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from '@nextui-org/react'

export default function Navbar() {
  return ( 
    <>
        <Nav className='animate-fade-down' isBordered>
            <NavbarBrand className='cursor-pointer' onClick={() => {
                window.location.replace("/")
            }}><img src='src\assets\LearnXIcon.png' width={70} className='mt-2'></img>
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
    </>
  )
}
