import React from "react"
import { SimpleGrid, Text, Stack } from "@chakra-ui/core"
import LaunchItem from "components/LaunchItem"

export default function RecentLaunches({ launches }) {
  if (!launches?.length) {
    return null
  }
  return (
    <Stack my="8" spacing="3">
      <Text fontSize="xl" fontWeight="bold">
        Last launches
      </Text>
      <SimpleGrid minChildWidth="350px" spacing="4">
        {launches.map(launch => (
          <LaunchItem launch={launch} key={launch.flight_number} />
        ))}
      </SimpleGrid>
    </Stack>
  )
}
