import React from "react"
import { Box, AspectRatioBox } from "@chakra-ui/core"

export default function Video({ launch }) {
  return (
    <AspectRatioBox maxH="400px" ratio={1.7}>
      <Box
        as="iframe"
        title={launch.mission_name}
        src={`https://www.youtube.com/embed/${launch.links.youtube_id}`}
        allowFullScreen
      />
    </AspectRatioBox>
  )
}
