import React from 'react'
import { Box, Flex, Heading, Text } from 'axs'

import Container from './container'
import cx from '../cx'

export default () => (
  <Box is='header' mb4>
    <Box py4 mb4 white bgViolet>
      <Box py4 mx='auto' css={cx.container}>
        <Box border='bottom' css={{borderWidth: '.5rem'}}>
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
      </Box>
    </Box>
  </Box>
)
