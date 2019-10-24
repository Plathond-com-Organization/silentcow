import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"

const Map = () => {
  return (
    <div class="mapouter">
      <div class="gmap_canvas">
        <iframe
          className="w-full h-96"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=14%20Commercial%20Way%2C%20Woking%20GU21%206ET%2C%20UK&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        ></iframe>
      </div>
    </div>
  )
}

const Contact = ({data}) => {
  const emailId = data.markdownRemark.frontmatter.contactEmailId;
  return (
    <Layout>
      <Map />
      <form action={`https://mailthis.to/${emailId}`} className="container my-20 md:w-2/3 lg:w-1/2">
        <h2 class="text-5xl font-bold">Contact Us</h2>
        <div className="form-group">
          <label class="form-label" for="name">
            Name
          </label>
          <input class="form-input" placeholder="Firstname Lastname" type="text" name="name" />
        </div>
        <div className="form-group">
          <label class="form-label" for="email">
            Email
          </label>
          <input class="form-input" placeholder="firstname.lastname@example.com" type="email" name="email" />
        </div>
        <div className="form-group">
          <label class="form-label" for="subject">
            Subject
          </label>
          <input class="form-input" placeholder="Subject" type="text" name="subject" />
        </div>
        <div className="form-group">
          <label class="form-label" for="name">
            Message
          </label>
          <textarea class="form-input" placeholder="Your message here" name="message" />
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
