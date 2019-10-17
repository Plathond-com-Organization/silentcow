import React from "react"
import BackgroundImage from 'gatsby-background-image-es5';

const Hero = ({ heading="", subheading="", imageFluid }) => {
  return (
    <BackgroundImage
      Tag="div"
      className="bg-fixed min-h-48 py-32"
      fluid={imageFluid}
    >
      <div className="container flex flex-col justify-center items-center min-h-48 leading-tight">
        { heading.length > 0 && ( <h1 className="font-bold text-5xl shadow-lg bg-custom-red text-white py-4 px-5 rounded border border-red-900">{heading}</h1> ) }
        { subheading.length>0 && ( <h3 className="p-3 rounded-lg border-2 border-red-900 mt-5 bg-custom-red text-white shadow-lg text-2xl font-bold">{subheading}</h3> ) }
      </div>
    </BackgroundImage>
  )
}

export default Hero
