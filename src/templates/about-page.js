import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/Layout"
import Content, { HTMLContent } from "../components/Content"

export const AboutPageTemplate = ({ title, content, contentComponent, quotes }) => {
  const PageContent = contentComponent || Content
  return (
    <>
      <h2 className="container mt-10 text-6xl font-bold">{title}</h2>
      {quotes.map(( quote, index ) => (
        <Quote key={index} name={quote.name} quote={quote.quote} imgFluid={quote.quoteImage.childImageSharp.fluid} />
      ))}
      <section className="container py-10">
        <PageContent className="markdown" content={content} />
      </section>
    </>
  )
}

const Quote = ({ name = "Name", quote = "The quote goes here", imgFluid }) => {
  return (
    <section className="container my-5">
      <div className="relative rounded-lg overflow-hidden shadow hover:shadow-xl tr-fast">
        <Img fluid={imgFluid} className="relative h-96"></Img>
        <div className="absolute inset-0 bg-custom-black-50 flex flex-col justify-end items-center text-white px-4 md:px-10 p-10">
          <p className="text-lg md:text-xl lg:text-2xl italic">{quote}</p>
          <h4 className="mt-4 text-xl md:text-3xl lg:text-4xl font-bold self-end">- {name}</h4>
        </div>
    </div>
    </section>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate contentComponent={HTMLContent} title={post.frontmatter.title} content={post.html} quotes={post.frontmatter.quotes} />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        quotes {
          name
          quote
          quoteImage {
            childImageSharp {
              fluid(maxWidth: 500, quality: 85) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`
