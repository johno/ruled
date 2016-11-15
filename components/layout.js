import React from 'react'
import Head from './head'

export default ({ style, children }) => (
  <div style={style}>
    <Head />
    {children}
  </div>
)
