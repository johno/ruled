import React from 'react'
import { Box, Flex, InlineBlock, Text } from 'axs'

import Container from './container'
import cx from '../cx'

export default () => (
   <Box bgGray2 mt3 p3>
      <Text size6 gray6 css={{textAlign: 'center'}}>
        <Text
          is='a'
          p0
          mr1
          size6
          violet
          css={cx.pre}
          href='https://github.com/johnotander/ruled'
          style={{textDecoration: 'none'}}
          children='Crafted'
        />
        with &lt;3 by
        <Text
          is='a'
          violet
          ml1
          size6
          css={cx.pre}
          href='https://twitter.com/4lpine'
          style={{textDecoration: 'none'}}
          children='@4lpine'
        />
      </Text>
   </Box> 
)
