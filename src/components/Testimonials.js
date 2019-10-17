import React from "react"
import PropTypes from "prop-types"
import { v4 } from "uuid"

const Testimonials = ({ testimonials }) => (
  <div className="my-5">
    {testimonials.map(testimonial => (
      <article key={v4()} className="message">
        <div className="my-1 p-6 bg-gray-200 border-l-4 border-gray-400">
          {testimonial.quote}
          <br />
          <cite> - {testimonial.author}</cite>
        </div>
      </article>
    ))}
  </div>
)

Testimonials.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string,
      author: PropTypes.string,
    })
  ),
}

export default Testimonials
