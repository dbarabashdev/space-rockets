import React from "react"
import { Flex, Box, Text, Link } from "@chakra-ui/core"
import { ArrowRight } from "react-feather"
import { Link as BrowserLink } from "react-router-dom"

export default function PageLink({ url, children, ...rest }) {
  return (
    <Link as={BrowserLink} to={url} {...rest}>
      <Flex justifyContent="space-between" p="6" boxShadow="md" borderWidth="1px" rounded="lg">
        <Text fontSize="lg">{children}</Text>
        <Box as={ArrowRight} />
      </Flex>
    </Link>
  )
}
