import React from "react"
import { Link } from "gatsby"

import logo from "../img/logo.png"

const Footer = () => {
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
    },
    {
      name: "What We Do",
      href: "/WhatWeDo",
    },
  ]
  return (
    <footer className="bg-custom-darkgray py-20">
      <div className="container flex flex-col md:flex-row justify-between">
        <div className="md:w-1/3 flex flex-wrap md:flex-col justify-between text-white">
          {links.map(link => (
            <Link className="w-1/3 text-center md:text-left whitespace-no-wrap my-5 md:m-2" to={link.href}>
              {link.name}
            </Link>
          ))}
        </div>
        <img src={logo} alt="Silent Cow" className="w-2/3 my-20 md:my-0 md:w-1/3 self-center h-full object-contain" />
        <div className="md:w-1/3 flex md:flex-col self-stretch justify-center md:justify-between items-end text-white text-5xl md:text-3xl">
          <i class="m-3 md:m-1 fab fa-facebook-square"></i>
          <i class="m-3 md:m-1 fab fa-instagram"></i>
          <i class="m-3 md:m-1 fab fa-twitter-square"></i>
          <i class="m-3 md:m-1 fab fa-vimeo"></i>
        </div>
      </div>
    </footer>
  )
}

export default Footer
