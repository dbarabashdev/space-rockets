import React from "react"
import { MapPin, Navigation } from "react-feather"
import { Stat, StatLabel, StatNumber, StatHelpText, SimpleGrid, Box } from "@chakra-ui/core"

export default function LocationAndVehicles({ launchPad }) {
  return (
    <SimpleGrid columns={[1, 1, 2]} borderWidth="1px" p="4" borderRadius="md">
      <Stat>
        <StatLabel display="flex">
          <Box as={MapPin} width="1em" />{" "}
          <Box ml="2" as="span">
            Location
          </Box>
        </StatLabel>
        <StatNumber fontSize="xl">{launchPad.location.name}</StatNumber>
        <StatHelpText>{launchPad.location.region}</StatHelpText>
      </Stat>
      <Stat>
        <StatLabel display="flex">
          <Box as={Navigation} width="1em" />{" "}
          <Box ml="2" as="span">
            Vehicles
          </Box>
        </StatLabel>
        <StatNumber fontSize="xl">{launchPad.vehicles_launched.join(", ")}</StatNumber>
      </Stat>
    </SimpleGrid>
  )
}
