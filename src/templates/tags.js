import React from "react"
import Helmet from "react-helmet"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const tag = this.props.pageContext.tag
    const title = this.props.data.site.siteMetadata.title
    const totalCount = this.props.data.allMarkdownRemark.totalCount
    const tagHeader = `${totalCount} post${totalCount === 1 ? "" : "s"} tagged with “${tag}”`

    return (
      <Layout>
        <section className="container my-20">
          <Helmet title={`${tag} | ${title}`} />
          <h3 className="text-3xl font-bold">{tagHeader}</h3>
          <ul className="flex flex-col mt-10">
            {posts.map(post => (
              <li key={post.node.fields.slug}>
                <Link to={post.node.fields.slug}>
                  <h2 className="text-4xl text-blue-700 font-bold mb-5">{post.node.frontmatter.title}</h2>
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/tags/" className="text-blue-700 my-20 inline-block">
            Browse all tags
          </Link>
        </section>
      </Layout>
    )
  }
}

export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000, sort: { fields: [frontmatter___date], order: DESC }, filter: { frontmatter: { tags: { in: [$tag] } } }) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
