import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../../components/Layout"
import BlogRoll from "../../components/BlogRoll"
import Hero from "../../components/misc/Hero"

const BlogIndexPage = () => {
  const data = useStaticQuery(graphql`
    query ImageQuery {
      file(relativePath: { eq: "blog-index.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
    <Hero heading="Latest Stories" imageFluid={data.file.childImageSharp.fluid}/>
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

export default BlogIndexPage
