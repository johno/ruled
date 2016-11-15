import React from 'react'
import Head from 'next/head'

export default () => (
  <Head>
    <title>Ruled</title>
    <meta charSet='utf-8' />
    <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    <style children={sx} />
  </Head>
)

const sx = `
  * { box-sizing: border-box; }
  body {
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    line-height: 1.5;
    margin: 0;
  }
`
