import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/Layout"
import Features from "../components/Features"
import Testimonials from "../components/Testimonials"
import Pricing from "../components/Pricing"
import Hero from "../components/misc/Hero"

export const ProductPageTemplate = ({ image, title, heading, description, intro, main, testimonials, fullImage, pricing }) => (
  <div>
    <Hero heading="Our Coffee" imageFluid={image.childImageSharp.fluid} />
    <section className="container flex flex-col py-20">
      <h2 className="leading-tight text-5xl font-bold">{heading}</h2>
      <p className="mt-5 mb-8 md:w-8/12 leading-relaxed">{description}</p>
      <Features gridItems={intro.blurbs} />
    </section>
    <section class="container py-20">
      <h3 className="text-5xl font-bold">{main.heading}</h3>
      <p className="my-5 leading-relaxed md:w-1/2">{main.description}</p>
      <div class="flex flex-wrap -mx-2">
        <div className="p-2 w-1/2">
          <Img className="rounded-lg" fluid={main.image1.image.childImageSharp.fluid}></Img>
        </div>
        <div className="p-2 w-1/2">
          <Img className="rounded-lg" fluid={main.image2.image.childImageSharp.fluid}></Img>
        </div>
        <div className="p-2 w-full">
          <Img className="rounded-lg" fluid={main.image3.image.childImageSharp.fluid}></Img>
        </div>
      </div>
      <Testimonials testimonials={testimonials} />
    </section>
    <Hero heading="" imageFluid={fullImage.childImageSharp.fluid}></Hero>
    <section className="container flex flex-col py-20">
      <h2 className="text-5xl font-bold">{pricing.heading}</h2>
      <p className="my-4 text-lg">{pricing.description}</p>
      <Pricing data={pricing.plans} />
    </section>
  </div>
)

ProductPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  main: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
  testimonials: PropTypes.array,
  fullImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  pricing: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    plans: PropTypes.array,
  }),
}

const ProductPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ProductPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        intro={frontmatter.intro}
        main={frontmatter.main}
        testimonials={frontmatter.testimonials}
        fullImage={frontmatter.full_image}
        pricing={frontmatter.pricing}
      />
    </Layout>
  )
}

ProductPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ProductPage

export const productPageQuery = graphql`
  query ProductPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
        main {
          heading
          description
          image1 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image2 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image3 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 1075, quality: 72) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        testimonials {
          author
          quote
        }
        full_image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        pricing {
          heading
          description
          plans {
            description
            items
            plan
            price
          }
        }
      }
    }
  }
`
