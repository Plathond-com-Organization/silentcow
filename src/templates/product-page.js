import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import showdown from "showdown"

import Layout from "../components/Layout"
import Features from "../components/Features"
import Testimonials from "../components/Testimonials"
import Hero from "../components/misc/Hero"

export const ProductPageTemplate = ({
  image,
  title,
  productItems,
  heading,
  description,
  intro,
  main,
  testimonials,
  fullImage,
  showMainHero,
  showProductSectionOne,
  showProductSectionTwo,
  showTestimonials,
  showPriceList,
}) => {
  return (
    <div>
      {showMainHero && <Hero heading={title} imageFluid={image.childImageSharp.fluid} />}
      {showPriceList && <PriceListSection fullImage={fullImage} productItems={productItems} />}
      {showProductSectionOne && <ProductSection1 heading={heading} description={description} intro={intro} />}
      {showProductSectionTwo && <ProductSection2 main={main} />}
      {showTestimonials && <TestimonialsSection testimonials={testimonials} />}
      <span className="py-16 block"></span>
    </div>
  )
}

const PriceListSection = ({ fullImage, productItems }) => {
  return (
    <>
      <Hero heading="" imageFluid={fullImage.childImageSharp.fluid}></Hero>
      <PriceList productItems={productItems} />
    </>
  )
}

const TestimonialsSection = ({ testimonials }) => {
  return (
    <section className="container">
      <Testimonials testimonials={testimonials} />
    </section>
  )
}

const ProductSection1 = ({ heading, description, intro }) => {
  return (
    <section className="container flex flex-col py-20">
      <h2 className="leading-tight text-3xl md:text-4xl lg:text-5xl font-bold">{heading}</h2>
      <p className="mt-5 mb-8 lg:w-8/12 leading-relaxed">{description}</p>
      <Features gridItems={intro.blurbs} />
    </section>
  )
}

const ProductSection2 = ({ main }) => {
  return (
    <section className="container">
      <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold">{main.heading}</h3>
      <p className="my-5 leading-relaxed lg:w-1/2">{main.description}</p>
      <div className="flex flex-wrap -mx-2">
        <div className="p-2 w-1/2">
          <Img className="h-64 lg:h-96" fluid={main.image1.image.childImageSharp.fluid}></Img>
        </div>
        <div className="p-2 w-1/2">
          <Img className="h-64 lg:h-96" fluid={main.image2.image.childImageSharp.fluid}></Img>
        </div>
        <div className="p-2 w-full">
          <Img fluid={main.image3.image.childImageSharp.fluid}></Img>
        </div>
      </div>
    </section>
  )
}

export const PriceList = ({ productItems }) => {
  const converter = new showdown.Converter()
  return (
    <section className="container my-20">
      <h3 className="mb-10 text-5xl font-bold text-center">Our Products</h3>
      <div className="flex justify-around flex-wrap">
        {productItems.map((product, index) => (
          <div
            className="mb-5 w-full lg:w-5/12 border-4 border-custom-blue bg-custom-blue text-white mx-2 shadow-lg hover:shadow-xl rounded-lg overflow-hidden tr-fast"
            key={index}
          >
            <Img className="h-96" imgStyle={{ padding: "2rem", background: "white" }} fluid={product.productImage.childImageSharp.fluid}></Img>
            <div className="my-5 p-5 flex flex-col items-center">
              <span className="text-5xl text-custom-navyblue font-bold">{product.price}</span>
              <span className="text-4xl font-bold">{product.heading}</span>
              <span className="my-3 markdown flex flex-col items-center" dangerouslySetInnerHTML={{ __html: converter.makeHtml(product.description) }}></span>
              <button className="buy-button btn-custom bg-custom-navyblue hover:shadow-lg snipcart-add-item"
                data-item-id="1"
                data-item-price="{product.price}"
                data-item-url="/"
                data-item-name="{product.heading}"
                data-item-image="{product.productImage.childImageSharp.fluid}"
                data-item-description="{product.description}"
              >
                Buy now (£9.99)
              </button>
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
        productItems={frontmatter.productItems}
        showMainHero={frontmatter.showMainHero}
        showProductSectionOne={frontmatter.showProductSectionOne}
        showProductSectionTwo={frontmatter.showProductSectionTwo}
        showTestimonials={frontmatter.showTestimonials}
        showPriceList={frontmatter.showPriceList}
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
        showMainHero
        showProductSectionOne
        showProductSectionTwo
        showTestimonials
        showPriceList
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
                fluid(maxWidth: 640, quality: 75) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            heading
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
                fluid(maxHeight: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image2 {
            alt
            image {
              childImageSharp {
                fluid(maxHeight: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image3 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 1075, maxHeight: 800, quality: 72) {
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
      }
    }
  }
`
