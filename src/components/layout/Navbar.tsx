import Link from "next/link"
import { SITE_TITLE } from "../../constants/constants"

const Navbar = () => {
  return (
    <header className="flex justify-between items-center bg-green-600 text-white py-4 px-4">
      <h2 className="text-lg">
        <Link href="/">
          <a>{SITE_TITLE}</a>
        </Link>
      </h2>
      <nav>
        <ul className="flex">
          <NavLink href="/login">Login</NavLink>
          <NavLink href="/signup">Signup</NavLink>
        </ul>
      </nav>
    </header>
  )
}

interface NavLinkProps {
  href: string
  children: string
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  return (
    <li className="ml-8">
      <Link href={href}>
        <a>{children}</a>
      </Link>
    </li>
  )
}

export default Navbar