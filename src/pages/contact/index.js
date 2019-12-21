import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"

const Map = () => {
  return (
    <div className="mapouter">
      <div className="gmap_canvas">
        <iframe
          className="w-full h-96"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=14%20Commercial%20Way%2C%20Woking%20GU21%206ET%2C%20UK&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          title="Google Maps Location"
        ></iframe>
      </div>
    </div>
  )
}

const Contact = ({ data }) => {
  const emailId = data.markdownRemark.frontmatter.contactEmailId
  return (
    <Layout>
      <Map />
      <form action={`https://mailthis.to/${emailId}`} method="POST" className="container my-20 md:w-2/3 lg:w-1/2">
        <h2 className="text-5xl font-bold">Contact Us</h2>
        <div className="form-group">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-input" placeholder="Firstname Lastname" type="text" name="name" />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-input" placeholder="firstname.lastname@example.com" type="email" name="email" />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="subject">
            Subject
          </label>
          <input className="form-input" placeholder="Subject" type="text" name="subject" />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="name">
            Message
          </label>
          <textarea className="form-input" placeholder="Your message here" name="message" />
        </div>
        <button type="submit" className="mt-5 btn">
          Submit
        </button>
      </form>
    </Layout>
  )
}

export const PageQuery = graphql`
  query ContactPageQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        contactEmailId
      }
    }
  }
`

export default Contact
