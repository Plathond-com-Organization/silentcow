import React from "react"
import { Link, graphql } from "gatsby"

import "../styles/index.css"

import Layout from "../components/Layout"
import Features from "../components/Features"
import BlogRoll from "../components/BlogRoll"
import Hero from "../components/misc/Hero"
import { Quote } from "../templates/about-page"
import { WhatCardItem } from "../templates/what-we-do"

const HeroSection = ({ image, title, subheading }) => {
  return (
    <section id="home-hero">
      <Hero imageFluid={image.childImageSharp.fluid} heading={title} subheading={subheading}></Hero>
    </section>
  )
}

const WhatsSection = ({ whats }) => {
  return (
    <section class="container flex flex-wrap mt-20">
      {whats.map((what, index) => (
        <WhatCardItem cardNum={index + 1} cardText={what.title}></WhatCardItem>
      ))}
    </section>
  )
}

const MainPitchSection = ({ mainpitch }) => {
  return (
    <section id="home-intro" className="container leading-tight py-10">
      <div>
        <h4 className="text-4xl font-bold">{mainpitch.title}</h4>
        <p className="mt-4 text-xl font-bold">{mainpitch.description}</p>
      </div>
    </section>
  )
}

const FeaturesSection = ({ intro }) => {
  return (
    <section id="home-products" className="container flex flex-col pb-10">
      <Features gridItems={intro.blurbs} />
      <Link className="mt-5 btn self-center" to="/products">
        See all products
      </Link>
    </section>
  )
}

const BlogSection = () => {
  return (
    <section id="home-stories" className="container flex flex-col pt-10 pb-20">
      <h3 className="text-4xl font-bold">Latest stories</h3>
      <BlogRoll />
      <Link className="mt-5 btn self-center" to="/blog">
        Read more
      </Link>
    </section>
  )
}

const QuotesSection = ({quotes}) => {
  return (
    <section>
      {quotes.map((quote, index) => (
        <Quote key={index} name={quote.name} quote={quote.quote} imgFluid={quote.quoteImage.childImageSharp.fluid} />
      ))}
    </section>
  )
}

export const IndexPageTemplate = ({
  whats,
  image,
  title,
  subheading,
  mainpitch,
  intro,
  showWhatCards,
  showQuoteCards,
  showBlogPosts,
  showProductCards,
  quotes,
}) => (
  <div className="home-page">
    <HeroSection image={image} title={title} subheading={subheading} />
    {showWhatCards && <WhatsSection whats={whats} />}
    <MainPitchSection mainpitch={mainpitch} />
    {showQuoteCards && <QuotesSection quotes={quotes} />}
    {showProductCards && <FeaturesSection intro={intro} />}
    {showBlogPosts && <BlogSection />}
  </div>
)

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  const whats = data.whats.frontmatter.whats
  const quotes = data.about.frontmatter.quotes

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={data.products.frontmatter.intro}
        whats={whats}
        showWhatCards={frontmatter.showWhatCards}
        showQuoteCards={frontmatter.showQuoteCards}
        showProductCards={frontmatter.showProductCards}
        showBlogPosts={frontmatter.showBlogPosts}
        quotes={quotes}
      />
    </Layout>
  )
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
        showWhatCards
        showQuoteCards
        showProductCards
        showBlogPosts
      }
    }
    whats: markdownRemark(frontmatter: { templateKey: { eq: "what-we-do" } }) {
      frontmatter {
        whats {
          title
          description
          image {
            absolutePath
          }
        }
      }
    }
    products: markdownRemark(frontmatter: { templateKey: { eq: "product-page" } }) {
      frontmatter {
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 640, quality: 75) {
                  src
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
    about: markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
      frontmatter {
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
