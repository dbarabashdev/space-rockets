import React from "react"
import { Flex, Heading, Badge, Stack } from "@chakra-ui/core"

const randomColor = (start = 200, end = 250) => `hsl(${start + end * Math.random()}, 80%, 90%)`

export default function LaunchPadHeader({ launchPad }) {
  return (
    <Flex
      background={`linear-gradient(${randomColor()}, ${randomColor()})`}
      bgPos="center"
      bgSize="cover"
      bgRepeat="no-repeat"
      minHeight="15vh"
      position="relative"
      flexDirection={["column", "row"]}
      p={[2, 6]}
      alignItems="flex-end"
      justifyContent="space-between"
    >
      <Heading color="gray.900" display="inline" mx={[2, 4]} my="2" fontSize={["md", "3xl"]} borderRadius="lg">
        {launchPad.site_name_long}
      </Heading>
      <Stack isInline spacing="3">
        <Badge variantColor="purple" fontSize={["sm", "md"]}>
          {launchPad.successful_launches}/{launchPad.attempted_launches} successful
        </Badge>
        {launchPad.stats === "active" ? (
          <Badge variantColor="green" fontSize={["sm", "md"]}>
            Active
          </Badge>
        ) : (
          <Badge variantColor="red" fontSize={["sm", "md"]}>
            Retired
          </Badge>
        )}
      </Stack>
    </Flex>
  )
}
