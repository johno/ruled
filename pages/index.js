import React from 'react'
import Head from 'next/head'

import {
  Flex, Box, Text, Heading, NavLink, Container
} from 'axs'

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
      backgroundSize: `${config.size}px ${config.size}px`
    }

    return (
      <div style={sx}>
        <Head>
          <title>Ruled</title>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <style children={`
            * { box-sizing: border-box; }
            body {
              font-family: -apple-system, BlinkMacSystemFont, sans-serif;
              line-height: 1.5;
              margin: 0;
            }
          `} />
        </Head>
        <Box>
          <Box is='header' px3 mb4>
            <Box px3 py4 mb4 white bgViolet>
              <Box py4 mx='auto' css={cx.container}>
                <Flex css={cx.flex}>
                  <Box border='right' css={cx.pipe} pr3 mr3>
                  <Heading level={1} size={[1, null, 0]}>
                    Ruled
                  </Heading>
                </Box>
                <Box width={[1, 1/2]}>
                  <Text is='p' bold size={[4, 3 ]} mt2>
                    Create css debug grids using background gradients
                  </Text>
                  <Text size={4} p0 my2 grape1 css={cx.pre}>
                    npm i ruled
                  </Text>
                </Box>
                </Flex> 
              </Box>
            </Box>
          </Box>
          <Box mx='auto' css={cx.container}>
            <Box>
              <Text
                display='block'
                gray6
                is='label'
                size6
                children='Stroke Width'
              />
              <Box
                bgWhite
                border
                borderGray4
                display='block'
                is='input'
                name='stokeWidth'
                p1
                rounded
                type='text'
                width={1}
                css={cx.input}
                value={config.strokeWidth}
                onChange={e => this.handleChange('strokeWidth', e.target.value)}
            />
            </Box>
            <Box>
              <Text
                display='block'
                gray6
                is='label'
                size6
                children='Size'
              />
              <Box
                bgWhite
                border
                borderGray4
                display='block'
                is='input'
                name='size'
                p1
                rounded
                type='text'
                width={1}
                css={cx.input}
                value={config.size}
                onChange={e => this.handleChange('size', e.target.value)}
            />
            </Box>
            <Box pt1>
              <Box
                is='input'
                name='horizontal'
                display='inline'
                css={cx.input}
                type='checkbox'
                checked={config.horizontal}
                onChange={e => this.handleChange('horizontal', e.target.checked)}
              />
              <Text
                gray6
                is='label'
                size6
                display='inline'
                children='Horizontal'
              />
              <Box
                ml2
                is='input'
                name='vertical'
                display='inline'
                css={cx.input}
                type='checkbox'
                checked={config.vertical}
                onChange={e => this.handleChange('vertical', e.target.checked)}
              />
              <Text
                gray6
                is='label'
                size6
                display='inline'
                children='Vertical'
              />
              <Box
                ml2
                is='input'
                name='color'
                display='inline'
                css={cx.input}
                type='color'
                value={config.color}
                onChange={e => this.handleChange('color', e.target.checked)}
              />
              <Text
                gray6
                is='label'
                size6
                display='inline'
                children='Color'
              />
            </Box>
            <Box
              is='pre'
              p2
              mb0
              bgGray1
              borderGray2
              css={cx.pre}
              children={`const styles = \{
  backgroundImage: '${sx.backgroundImage}',
  backgroundSize: '${sx.backgroundSize}'
\}
`} />
          </Box>
        </Box>
      </div>
    )
  }
}

const cx = {
  pipe: {
    borderWidth: 4,
    '@media screen and (max-width:40em)': {
      border: 0
    }
  },
  flex: {
    flexWrap: 'wrap',
    alignItems: 'center'
  },
  pre: {
    fontFamily: 'Menlo, monospace',
    maxWidth: '100%',
    overflow: 'auto',
  },
  container: {
    maxWidth: 1024
  },
  input: {
    ':focus': {
      borderColor: 'rgb(121, 80, 242)',
      outline: 'none'
    },
    color: 'inherit',
    fontFamily: 'inherit',
    fontSize: 'inherit'
  }
}
