import React from 'react'
import PropTypes from 'prop-types'

export const HTMLContent = ({ content }) => <div className="markdown" dangerouslySetInnerHTML={{ __html: content }} />

const Content = ({ content }) => <div className="markdown">{content}</div>

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
}

HTMLContent.propTypes = Content.propTypes

export default Content
