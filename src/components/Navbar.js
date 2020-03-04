import React, { useState } from "react"
import { Link } from "gatsby"
import logo from "../img/Silent-Cow-Home-Logo.png"

const Navbar = () => {
  const links = [
    {
      name: "Home",
      href: "/",
    },
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
    }
//     {
//       name: "Buy now",
//       href: "https://www.kewbz.co.uk/search?type=product&q=NOT+tag%3A__gift+AND+the+silent+cow*",
//     }
//     {
//       name: "What We Do",
//       href: "/whatwedo",
//     }
  ]

  const [isNavToggle, toggleNavbar] = useState(false)

  const navActiveClasses = isNavToggle ? "flex md:flex" : "hidden md:flex"

  return (
    <>
      <nav className="container py-2 flex flex-wrap justify-between items-center">
        <Link to="/" className="w-32 nav-header flex-shrink-0">
          <img className="object-contain h-24" src={logo} alt="Silent Cow" />
        </Link>
        <div className="md:hidden text-3xl" onClick={() => toggleNavbar(!isNavToggle)}>
          <i className="fas fa-bars"></i>
        </div>
        <div
          className={`mt-5 md:mt-0 w-full md:w-auto ${navActiveClasses} flex-col md:flex-row items-stretch text-center md:text-left md:ml-10 md:text-xl nav-links`}
        >
          {links.map((link, index) => (
            <Link className="py-3 my-2 md:my-0 mx-4" to={link.href} key={index}>
              {link.name}
            </Link>
          ))}
          <button className="py-3 my-2 md:my-0 mx-4 snipcart-checkout">
            <span className="snipcart-total-price">£0.00</span>
            (<span className="snipcart-item-count">0</span>)
          </button>
        </div>
      </nav>
    </>
  )
}

export default Navbar
