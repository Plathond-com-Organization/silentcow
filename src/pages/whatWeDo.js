import React from "react"
import Layout from "../components/Layout"

const WhatWeDo = () => {
  return (
    <Layout>
      <section class="container py-20">
        <div className="flex flex-wrap -mx-2">
          <WhatCardItem cardNum={1} cardText="Corporate Training and Team Building" />
          <WhatCardItem cardNum={2} cardText="Our 5 Level Training Programme" />
          <WhatCardItem cardNum={3} cardText="Products" />
        </div>
      </section>
    </Layout>
  )
}

const WhatCardItem = ({ cardNum = 1, cardText = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, ipsum!" }) => {
  return (
    <div className="px-2 md:w-1/3">
      <div className="flex flex-col items-center bg-gray-200 px-5 py-16">
        <h2 className="text-7xl border-b-2 border-gray-800">{cardNum}</h2>
        <p className="mt-16 leading-tight text-xl">{cardText}</p>
      </div>
    </div>
  )
}

export default WhatWeDo
