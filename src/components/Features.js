import React from "react"
import PropTypes from "prop-types"
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import showdown from "showdown"

const FeatureGrid = ({ gridItems }) => {
  const converter = new showdown.Converter()
  return (
    <div className="flex flex-wrap -mx-5">
      <h4 className="text-4xl font-bold">What we can do for you</h4>
      {gridItems.map(item => (
        <div key={item.text} className="p-5 flex flex-col md:w-1/2">
          <h4 class="text-2xl font-bold">{item.heading}</h4>
          <PreviewCompatibleImage imageInfo={item}/>
          <span className="mt-4 markdown" dangerouslySetInnerHTML={{ __html: converter.makeHtml(item.text) }}></span>
        </div>
      ))}
    </div>
  )
}

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
