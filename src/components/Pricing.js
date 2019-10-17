import React from "react"
import PropTypes from "prop-types"

const Pricing = ({ data }) => (
  <div className="flex flex-wrap my-20">
    {data.map(price => (
      <div className="px-10 flex flex-col items-center mb-32 md:mb-0 md:w-1/3">
        <h4 className="text-xl font-bold">{price.plan}</h4>
        <h2 class="my-10 text-5xl font-bold text-red-500">${price.price}</h2>
        <p class="text-lg self-start my-5 font-bold">{price.description}</p>
        <ul class="ml-10 self-start list-disc list-outside">
          {price.items.map(item => (
            <li key={item} className="text-xl">
              {item}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
)

Pricing.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      plan: PropTypes.string,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      description: PropTypes.string,
      items: PropTypes.array,
    })
  ),
}

export default Pricing
