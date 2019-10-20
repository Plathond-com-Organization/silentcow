import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import showdown from "showdown"

import Layout from "../components/Layout"
import Features from "../components/Features"
import Testimonials from "../components/Testimonials"
import Hero from "../components/misc/Hero"

export const ProductPageTemplate = ({ image, title, productItems, heading, description, intro, main, testimonials, fullImage, pricing }) => {
  return (
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
      <ProductList productItems={productItems} />
    </div>
  )
}

const ProductList = ({ productItems }) => {
  const converter = new showdown.Converter()
  return (
    <section class="container my-20">
      <h3 className="mb-10 text-5xl font-bold text-center">Our Products</h3>
      <div className="flex justify-around flex-wrap">
        {productItems.map(product => (
          <div className="mb-5 w-full lg:w-5/12 border-4 border-custom-blue bg-custom-blue text-white mx-2 shadow-lg hover:shadow-xl rounded-lg overflow-hidden tr-fast">
            <Img className="h-96" imgStyle={{ padding: "2rem", background: "white" }} fluid={product.productImage.childImageSharp.fluid}></Img>
            <div className="my-5 p-5 flex flex-col items-center">
              <span className="text-5xl text-custom-navyblue font-bold">{product.price}</span>
              <span className="text-4xl font-bold">{product.heading}</span>
              <span className="my-3 markdown flex flex-col items-center" dangerouslySetInnerHTML={{ __html: converter.makeHtml(product.description) }}></span>
              <a className="btn-custom bg-custom-navyblue hover:shadow-lg" href={product.link}>
                Purchase Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
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
        productItems={frontmatter.productItems}
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
        productItems {
          heading
          description
          price
          productImage {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          link
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
