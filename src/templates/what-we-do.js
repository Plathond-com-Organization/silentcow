import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

const WhatWeDoTemplate = ({ data }) => {
  const whats = data.markdownRemark.frontmatter.whats
  return (
    <Layout>
      <section class="container py-10">
        <div className="flex flex-wrap -mx-2">
          {whats.map((what, index) => (
            <WhatCardItem cardNum={index + 1} cardText={what.title} />
          ))}
        </div>
      </section>
      <section className="container">
        {whats.map((what, index) => (
          <WhatSectionItem what={what} index={index}></WhatSectionItem>
        ))}
      </section>
    </Layout>
  )
}

export const WhatSectionItem = ({ what, index }) => {
  return (
    <div id={`/what${index}`} className="flex bg-custom-gray text-white my-10 justify-between rounded-lg hover:shadow-xl overflow-hidden tr-fast">
      <Img className="w-1/2" fluid={what.image.childImageSharp.fluid}></Img>
      <div className="p-10 w-1/2" style={{ order: index % 2 ? "-1" : "1" }}>
        <h4 className="mb-10 text-2xl font-bold">{what.title}</h4>
        <p className="text-lg">{what.description}</p>
      </div>
    </div>
  )
}

export const WhatCardItem = ({ cardNum = 1, cardText = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, ipsum!" }) => {
  return (
    <Link to={`/whatwedo/#what${cardNum - 1}`} className="px-2 md:w-1/3">
      <div className="flex flex-col items-center bg-gray-200 px-5 py-16 rounded-lg shadow-md hover:shadow-xl tr-fast">
        <h2 className="text-7xl border-b-2 border-gray-800">{cardNum}</h2>
        <p className="mt-16 leading-tight text-xl">{cardText}</p>
      </div>
    </Link>
  )
}

export const PageQuery = graphql`
  {
    markdownRemark(frontmatter: { templateKey: { eq: "what-we-do" } }) {
      frontmatter {
        whats {
          title
          description
          image {
            childImageSharp {
              fluid(maxHeight: 500, maxWidth: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

export default WhatWeDoTemplate
