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
      <div className="container flex justify-between">
        <div className="w-1/3 flex flex-col text-white">
          {links.map(link => (
            <Link className="my-2" to={link.href}>
              {link.name}
            </Link>
          ))}
        </div>
        <img src={logo} alt="Silent Cow" className="w-1/3 self-center h-full object-contain" />
        <div className="w-1/3 flex flex-col self-stretch justify-between items-end text-white text-3xl">
          <i class="my-1 fab fa-facebook-square"></i>
          <i class="my-1 fab fa-instagram"></i>
          <i class="my-1 fab fa-twitter-square"></i>
          <i class="my-1 fab fa-vimeo"></i>
        </div>
      </div>
    </footer>
  )
}

export default Footer
