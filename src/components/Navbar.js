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
            <svg style="display: inline-block;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.305-15l-3.432 12h-10.428l-2.937-7h11.162l-1.412 5h2.078l1.977-7h-16.813l4.615 11h13.239l3.474-12h1.929l.743-2h-4.195z"/></svg>
              <span className="snipcart-total-price">£0.00</span>
              (<span className="snipcart-item-count">0</span>)
          </button>
        </div>
      </nav>
    </>
  )
}

export default Navbar
