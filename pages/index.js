import React from 'react'
import Head from 'next/head'
import ruled from 'ruled'

export default class extends React.Component {
  constructor () {
    super()

    this.state = {
      config: {
        size: 8,
        strokeWidth: 1,
        horizontal: true,
        vertical: true,
        color: '#cccccc'
      }
    }
  }

  handleChange (key, val) {
    const { config } = this.state
    config[key] = val

    this.setState({ config })
  }

  render () {
    const { config } = this.state

    const sx = {
      backgroundImage: ruled(config),
      backgroundSize: `${config.size}px ${config.size}px`,
      fontFamily: 'Monaco, monospace',
      minHeight: '100vh',
      margin: 0,
      padding: 0,
    }

    return (
      <div style={sx}>
        <Head>
          <title>Ruled</title>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <style children='body { margin: 0 } * { box-sizing: border-box }' />
        </Head>
        <div style={{margin: 'auto', maxWidth: '42rem', padding: '2rem'}}>
          <h1>Ruled</h1>
          <h3>
            Create custom debugging grids using only css and background properties.
          </h3>
          <div>
            <label children='Stroke Width' />
            <input
              value={config.strokeWidth}
              style={{width: '100%', padding: '.5rem'}}
              onChange={e => this.handleChange('strokeWidth', e.target.value)}
            />
          </div>
          <div style={{marginTop: '1rem'}}>
            <label children='Size' />
            <input
              value={config.size}
              style={{width: '100%', padding: '.5rem'}}
              onChange={e => this.handleChange('size', e.target.value)}
            />
          </div>
          <div style={{marginTop: '1rem'}}>
            <label>
              <input
                type='checkbox'
                checked={config.horizontal}
                onChange={e => this.handleChange('horizontal', e.target.checked)}
              />
              Horizontal
            </label>
            <label style={{marginLeft: '1rem'}}>
              <input
                type='checkbox'
                checked={config.vertical}
                onChange={e => this.handleChange('vertical', e.target.checked)}
              />
              Vertical
            </label>
            <label style={{marginLeft: '1rem'}}>
              <input
                type='color'
                value={config.color}
                onChange={e => this.handleChange('color', e.target.value)}
              />
              Color
            </label>
          </div>
          <pre
            style={{
              backgroundColor: '#fff',
              padding: '2rem',
              overflowX: 'scroll'
            }}
            children={`const styles = \{
  backgroundImage: '${sx.backgroundImage}',
  backgroundSize: '${sx.backgroundSize}'
\}
`}>
          </pre>
        </div>
      </div>
    )
  }
}
