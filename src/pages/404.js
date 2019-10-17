import React from 'react'
import Layout from '../components/Layout'

const NotFoundPage = () => (
  <Layout>
    <div class="py-20 container flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold">NOT FOUND</h1>
      <p className="text-2xl text-gray-700">You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
)

export default NotFoundPage
