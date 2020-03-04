import React from "react" 

const Button = ({productId, price, url, name, image, description}) => {
  
  return (
    <button className="buy-button btn-custom bg-custom-navyblue hover:shadow-lg snipcart-add-item"
        data-item-id={productId}
        data-item-price={price}
        data-item-url={url}
        data-item-name={name}
        data-item-description={description}
        >
        Buy now (£{price})
    </button>
  )
}

export default Button
