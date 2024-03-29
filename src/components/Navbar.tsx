"use client"
import { Menu, User, X } from "lucide-react"
import { FC } from "react"
import SearchBar from "./navbar/SearchBar"
import Button from "./ui/Button"
import { useContact, useMenu } from "./Provider"

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  const { setFormVisibility } = useContact()
  const { showMenu, showMenuVisibility } = useMenu()
  return (
    <nav className="flex sticky shadow-md top-0 z-20 bg-body p-10 text-info justify-between">
      <div></div>
      <div className="flex items-center gap-5">
        <Button onClick={setFormVisibility}>
          Contact Me <User size={18} />
        </Button>
        <button onClick={() => showMenuVisibility(!showMenu)} type="button">
          <Menu className="flex lg:hidden cursor-pointer hover:text-primary transition-colors" />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
