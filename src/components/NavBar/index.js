import React from "react"
import { Flex, Text } from "@chakra-ui/core"

export default function NavBar() {
  return (
    <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="6" bg="gray.800" color="white">
      <Text fontFamily="mono" letterSpacing="2px" fontWeight="bold" fontSize="lg">
        ¡SPACE·R0CKETS!
      </Text>
    </Flex>
  )
}
