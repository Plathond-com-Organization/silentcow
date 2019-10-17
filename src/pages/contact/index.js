import React from "react"
import Layout from "../../components/Layout"

const Contact = () => {
  return (
    <Layout>
      <form action="" className="container my-20 md:w-2/3 lg:w-1/2">
        <h2 class="text-5xl font-bold">Contact Us</h2>
        <div className="form-group">
          <label class="form-label" for="name">Name</label>
          <input class="form-input" placeholder="Firstname Lastname" type="text" name="name" />
        </div>
        <div className="form-group">
          <label class="form-label" for="email">Email</label>
          <input class="form-input" placeholder="firstname.lastname@example.com" type="email" name="email" />
        </div>
        <div className="form-group">
          <label class="form-label" for="subject">Subject</label>
          <input class="form-input" placeholder="Subject" type="text" name="subject" />
        </div>
        <div className="form-group">
          <label class="form-label" for="name">Message</label>
          <textarea class="form-input" placeholder="Your message here" name="message" />
        </div>
        <button type="submit" className="mt-5 btn">Submit</button>
      </form>
    </Layout>
  )
}

export default Contact
