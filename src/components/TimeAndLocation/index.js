import React from "react"
import { Link as RouterLink } from "react-router-dom"
import { format as timeAgo } from "timeago.js"
import { Watch, MapPin } from "react-feather"
import { formatDateTime, formalDateTimeLocal } from "utils/format-date"
import { Stat, StatLabel, StatNumber, StatHelpText, SimpleGrid, Box, Link, Tooltip } from "@chakra-ui/core"

export default function TimeAndLocation({ launch }) {
  return (
    <SimpleGrid columns={[1, 1, 2]} borderWidth="1px" p="4" borderRadius="md">
      <Stat>
        <StatLabel display="flex">
          <Box as={Watch} width="1em" />{" "}
          <Box ml="2" as="span">
            Launch Date
          </Box>
        </StatLabel>
        <Tooltip hasArrow placement="bottom" label={"Your local time " + formatDateTime(launch.launch_date_local)}>
          {formalDateTimeLocal(launch.launch_date_local)}
        </Tooltip>
        <StatHelpText>{timeAgo(launch.launch_date_utc)}</StatHelpText>
      </Stat>
      <Stat>
        <StatLabel display="flex">
          <Box as={MapPin} width="1em" />{" "}
          <Box ml="2" as="span">
            Launch Site
          </Box>
        </StatLabel>
        <StatNumber fontSize={["md", "xl"]}>
          <Link as={RouterLink} to={`/launch-pads/${launch.launch_site.site_id}`}>
            {launch.launch_site.site_name_long}
          </Link>
        </StatNumber>
        <StatHelpText>{launch.launch_site.site_name}</StatHelpText>
      </Stat>
    </SimpleGrid>
  )
}
