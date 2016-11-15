import React from 'react'
import Head from './head'
import Header from '../components/header'
import Footer from './footer'

export default ({ style, children }) => (
  <div style={style}>
    <Head />
    <Header />
    {children}
    <Footer />
  </div>
)
