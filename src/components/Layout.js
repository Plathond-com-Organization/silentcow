import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'

import '@fortawesome/fontawesome-free/css/all.css'
import './tailwind.css'

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div className="font-sans">
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link rel="apple-touch-icon" sizes="180x180" href={`${withPrefix('/')}img/apple-touch-icon.png`} />
        <link rel="icon" type="image/png" href={`${withPrefix('/')}img/favicon-32x32.png`} sizes="32x32" />
        <link rel="icon" type="image/png" href={`${withPrefix('/')}img/favicon-16x16.png`} sizes="16x16" />

        <link rel="mask-icon" href={`${withPrefix('/')}img/safari-pinned-tab.svg`} color="#ff4400" />
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.8/default/snipcart.css" />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content={`${withPrefix('/')}img/og-image.png`} />
      </Helmet>
      <Navbar />
      <div>{children}</div>
      <Footer />
      <div hidden id="snipcart" data-api-key="NDg0NDY0ZDYtYTlhNy00YTgzLWI4ZGQtMzE4MmRjNjZlNDQ1NjM3MTg4MzE4MTU0OTQwMzU2"></div>
      <script src="https://cdn.snipcart.com/themes/v3.0.8/default/snipcart.js"></script>
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-161836559-1"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-161836559-1');
      </script>
    </div>
  )
}

export default TemplateWrapper
