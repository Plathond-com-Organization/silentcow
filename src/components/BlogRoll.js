import React from "react"
import PropTypes from "prop-types"
import { Link, graphql, StaticQuery } from "gatsby"

const BlogRoll = ({ data }) => {
  // const { edges: posts } = data.allMarkdownRemark
  const posts = data.allMarkdownRemark.edges.map(edge => edge.node)
  console.log(posts)
  return (
    <div className="flex flex-wrap justify-between -mx-3">
      {posts.map(post => (
        <div className="md:w-1/2 px-3 mb-3">
          <div className="bg-green-200 my-2 p-5 rounded-lg">
            <h1 className="text-2xl font-bold">{post.frontmatter.title}</h1>
            <p className="my-3">{post.excerpt}</p>
            <Link to={post.fields.slug} className="inline-block rounded border border-gray-300 bg-gray-100 p-2">
              Keep Reading <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, filter: { frontmatter: { templateKey: { eq: "blog-post" } } }) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
