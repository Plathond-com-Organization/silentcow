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
        <div className="md:w-1/2 px-3 mb-6">
          <div className="bg-gray-200 shadow-md hover:shadow-xl border flex flex-col h-full my-2 p-8 rounded-lg tr-fast">
            <h1 className="h-16 text-2xl font-bold flex items-center">{post.frontmatter.title}</h1>
            <p className="mt-3 mb-5">{post.excerpt}</p>
            <Link to={post.fields.slug} className="self-start mt-auto btn">
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
