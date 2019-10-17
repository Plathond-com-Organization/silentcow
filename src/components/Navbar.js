import React, { useState } from "react"
import { Link } from "gatsby"
import logo from "../img/logo.png"

const Navbar = () => {
  const links = [
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Products",
      href: "/products",
    },
    {
      name: "Blog",
      href: "/blog",
    },
    {
      name: "Contact",
      href: "/contact",
    },
    {
      name: "What We Do",
      href: "/whatwedo",
    },

  ]

  const [isNavToggle, toggleNavbar] = useState(false);

  const navActiveClasses = isNavToggle ? 'flex md:flex' : 'hidden md:flex'

  return (
    <>
      <nav className="container py-5 flex flex-wrap justify-between items-center">
        <Link to="/" className="w-48 nav-header flex-shrink-0">
          <img className="object-fit" src={logo} alt="Silent Cow" />
        </Link>
        <div className="md:hidden text-3xl" onClick={() => toggleNavbar(!isNavToggle)}>
          <i className="fas fa-bars"></i>
        </div>
        <div className={ `mt-5 md:mt-0 w-full md:w-auto ${navActiveClasses} flex-col md:flex-row items-stretch text-center md:text-left md:ml-10 md:text-xl nav-links` }>
          {links.map(link => (
            <Link className="py-3 my-2 md:my-0 mx-4" to={link.href}>
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
    </>
  )
}

export default Navbar
