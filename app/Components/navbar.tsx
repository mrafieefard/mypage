"use client"
import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  useDisclosure,
} from "@nextui-org/react";

import ContactMeModal from "../Modals/contact_me";
const config = require("../../mypage.config.json");



export function AppNavbar() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
  return <>
    <ContactMeModal isOpen={isOpen} onOpenChange={onOpenChange} />
    <Navbar className="mb-10 z-50">
      <NavbarBrand>
        <p className="font-bold text-inherit">
          {config.header.title}
        </p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link href="#about" aria-current="page">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" onClick={()=>{}}>
            Skill
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#projects">
            Projects
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem></NavbarItem>
        <NavbarItem>
          <Button isDisabled as={Link} onClick={onOpen} color="primary" variant="bordered">
            Contact Me
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  </>;
}
