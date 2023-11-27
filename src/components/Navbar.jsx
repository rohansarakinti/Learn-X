import { Navbar as Nav, NavbarBrand, NavbarContent, Button } from '@nextui-org/react'

export default function Navbar() {
  return ( 
    <>
        <Nav isBordered>
            <NavbarBrand className='select-none cursor-pointer' onClick={() => {
                window.location.replace("/")
            }}><img src='src\assets\LearnX.png' width={100}></img></NavbarBrand>
            <NavbarContent justify='end'>
                <Button color='primary' onClick={() => {}}>
                    Login
                </Button>
            </NavbarContent>
        </Nav>
    </>
  )
}
