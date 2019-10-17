import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"

import "../styles/index.css"

import Layout from "../components/Layout"
import Features from "../components/Features"
import BlogRoll from "../components/BlogRoll"
import Hero from "../components/misc/Hero"

export const IndexPageTemplate = ({ image, title, heading, subheading, mainpitch, description, intro }) => (
  <div className="home-page">
    <section id="home-hero">
      <Hero imageFluid={image.childImageSharp.fluid} heading={title} subheading={subheading}></Hero>
    </section>

    <section id="home-intro" className="container leading-tight pt-32 pb-16">
      <div>
        <h4 className="text-4xl font-bold">{mainpitch.title}</h4>
        <p className="mt-4 text-2xl font-bold">{mainpitch.description}</p>
      </div>
      <div>
        <h2 className="mt-8 text-5xl font-bold">{heading}</h2>
        <p className="mt-2 text-lg leading-relaxed">{description}</p>
      </div>
    </section>

    <section id="home-products" className="container flex flex-col py-10">
      <Features gridItems={intro.blurbs} />
      <Link className="mt-5 btn self-center" to="/products">
        See all products
      </Link>
    </section>

    <section id="home-stories" className="container flex flex-col pt-10 pb-20">
      <h3 className="text-4xl font-bold">Latest stories</h3>
      <BlogRoll />
      <Link className="mt-5 btn self-center" to="/blog">
        Read more
      </Link>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 640, maxHeight: 480, quality: 75) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
