import React from "react"
import { Link } from "gatsby"

import logo from "../img/logo.png"

const Footer = () => {
  const social = [
    {
      link: "https://www.facebook.com/SilentCowUK/",
      icon: "facebook-square"
    },
    {
      link: "https://instagram.com/thesilentcow/",
      icon: "instagram"
    },
    {
      link: "https://twitter.com/thesilentcow",
      icon: "twitter-square"
    }
  ];
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
      name: "Blog",
      href: "/blog",
    },
    {
      name: "Contact",
      href: "/contact",
    }
  ];
  return (
    <footer className="bg-custom-darkgray py-20">
      <div className="container flex flex-col md:flex-row justify-between">
        <div className="md:w-1/3 flex flex-wrap md:flex-col justify-between text-white">
          {links.map((link, index) => (
            <Link className="w-1/3 text-center md:text-left whitespace-no-wrap my-5 md:m-2" to={link.href} key={index}>
              {link.name}
            </Link>
          ))}
        </div>
        <img src={logo} alt="Silent Cow" className="w-2/3 my-20 md:my-0 md:w-1/3 self-center h-full object-contain" />
        <div className="md:w-1/3 flex md:flex-col self-stretch justify-center md:justify-between items-end text-white text-5xl md:text-3xl">
          {social.map((obj, index) => (
            <a href={obj.link} target="_blank">
              <i className={"fa-"+obj.icon}></i>
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
