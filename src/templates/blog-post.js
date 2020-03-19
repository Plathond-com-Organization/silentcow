import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Helmet from "react-helmet"
import { kebabCase } from "lodash"
import Layout from "../components/Layout"
import Content, { HTMLContent } from "../components/Content"

export const BlogPostTemplate = ({ content, contentComponent, description, tags, title, helmet, featuredimage }) => {
  console.log(featuredimage)
  const PostContent = contentComponent || Content
  return (
    <section>
      {helmet || ""}
      <div className="container pt-10 pb-16">
        <h1 className="text-5xl font-bold leading-tight">{title}</h1>
        <div className="my-10">
          {featuredimage && (
            <Img
              fluid={featuredimage.childImageSharp.fluid}
              style={{
                maxWidth: featuredimage.childImageSharp.fluid.presentationWidth,
              }}
            />
          )}
        </div>
        <PostContent content={content} />
        {tags && tags.length ? (
          <div style={{ marginTop: `4rem` }}>
            <h4 className="text-xl font-bold mb-5">Tags</h4>
            <ul className="flex">
              {tags.map(tag => (
                <li className="mr-4 text-blue-500" key={tag + `tag`}>
                  <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </section>
  )
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta name="description" content={`${post.frontmatter.description}`} />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        featuredimage={post.frontmatter.featuredimage}
      />
    </Layout>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        featuredimage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
              presentationWidth
            }
          }
        }
      }
    }
  }
`
