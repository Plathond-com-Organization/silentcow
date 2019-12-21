import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import BlogRoll from "../components/BlogRoll"
import Hero from "../components/misc/Hero"

const BlogIndexPage = ({ data }) => {
  const pageData = data.markdownRemark.frontmatter
  const { title, coverImage } = pageData;

  return (
    <Layout>
      <Hero heading={title} imageFluid={coverImage.childImageSharp.fluid}/>
      <section className="py-10">
        <div className="container">
          <div>
            <BlogRoll />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const aboutPageQuery = graphql`
  query BlogMainPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        coverImage {
          childImageSharp {
            fluid(maxWidth: 500, quality: 85) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`

export default BlogIndexPage
