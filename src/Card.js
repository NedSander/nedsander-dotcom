import React from 'react'
import {
  Box,
  Card,
  Image,
  Heading,
  Text
} from 'rebass'
export default ({
  image,
  title,
  description
}) =>
  <Box width={256}>
    <Card>
      <Image src={image} />
      <Box px={2}>
        <Heading as='h3'>
          {title}
        </Heading>
        <Text fontSize={0}>
          {description}
        </Text>
      </Box>
    </Card>
  </Box>