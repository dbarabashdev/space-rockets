import React from "react"
import { useParams } from "react-router-dom"
import { Flex, Box, Text, Spinner } from "@chakra-ui/core"
import { useSpaceX } from "utils/use-space-x"
import Error from "components/Error"
import Breadcrumbs from "components/Breadcrumbs"
import Header from "components/Header"
import TimeAndLocation from "components/TimeAndLocation"
import RocketInfo from "components/RocketInfo"
import Video from "components/Video"
import Gallery from "components/Gallery"

export default function Launch() {
  let { launchId } = useParams()
  const { data: launch, error } = useSpaceX(`/launches/${launchId}`)

  if (error) return <Error />
  if (!launch) {
    return (
      <Flex justifyContent="center" alignItems="center" minHeight="50vh">
        <Spinner size="lg" />
      </Flex>
    )
  }

  return (
    <div>
      <Flex p="6" flexDirection="row" justifyContent="space-between" alignItems="center">
        <Breadcrumbs
          items={[{ label: "Home", to: "/" }, { label: "Launches", to: ".." }, { label: `#${launch.flight_number}` }]}
        />
      </Flex>
      <Header launch={launch} />
      <Box m={[3, 6]}>
        <TimeAndLocation launch={launch} />
        <RocketInfo launch={launch} />
        <Text color="gray.700" fontSize={["md", null, "lg"]} my="8">
          {launch.details}
        </Text>
        <Video launch={launch} />
        <Gallery images={launch.links.flickr_images} />
      </Box>
    </div>
  )
}
