import React from "react"
import { Navigation, Layers } from "react-feather"
import { Stat, StatLabel, StatNumber, StatHelpText, SimpleGrid, Box, StatGroup } from "@chakra-ui/core"

export default function RocketInfo({ launch }) {
  const cores = launch.rocket.first_stage.cores

  return (
    <SimpleGrid columns={[1, 1, 2]} borderWidth="1px" mt="4" p="4" borderRadius="md">
      <Stat>
        <StatLabel display="flex">
          <Box as={Navigation} width="1em" />
          <Box ml="2" as="span">
            Rocket
          </Box>
        </StatLabel>
        <StatNumber fontSize={["md", "xl"]}>{launch.rocket.rocket_name}</StatNumber>
        <StatHelpText>{launch.rocket.rocket_type}</StatHelpText>
      </Stat>
      <StatGroup>
        <Stat>
          <StatLabel display="flex">
            <Box as={Layers} width="1em" />
            <Box ml="2" as="span">
              First Stage
            </Box>
          </StatLabel>
          <StatNumber fontSize={["md", "xl"]}>{cores.map(core => core.core_serial).join(", ")}</StatNumber>
          <StatHelpText>
            {cores.every(core => core.land_success) ? (cores.length === 1 ? "Recovered" : "All recovered") : "Lost"}
          </StatHelpText>
        </Stat>
        <Stat>
          <StatLabel display="flex">
            <Box as={Layers} width="1em" />
            <Box ml="2" as="span">
              Second Stage
            </Box>
          </StatLabel>
          <StatNumber fontSize={["md", "xl"]}>Block {launch.rocket.second_stage.block}</StatNumber>
          <StatHelpText>
            Payload: {launch.rocket.second_stage.payloads.map(payload => payload.payload_type).join(", ")}
          </StatHelpText>
        </Stat>
      </StatGroup>
    </SimpleGrid>
  )
}
