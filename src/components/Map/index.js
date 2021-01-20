import React from "react"
import { Box, AspectRatioBox } from "@chakra-ui/core"

export default function Map({ location }) {
  return (
    <AspectRatioBox ratio={16 / 5}>
      <Box
        as="iframe"
        src={`https://maps.google.com/maps?q=${location.latitude}, ${location.longitude}&z=15&output=embed`}
        alt="demo"
      />
    </AspectRatioBox>
  )
}
