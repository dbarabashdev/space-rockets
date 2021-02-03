import React from "react"
import { Badge, Box, Text, Flex } from "@chakra-ui/core"
import { Link } from "react-router-dom"
import { FiHeart } from "react-icons/fi"

export default function LaunchPadItem({ launchPad, favouriteLaunchPads, setFavouriteLaunchPad }) {
  const isFavourite = (favouriteLaunchPads || []).findIndex(item => item.id === launchPad.id) > -1

  return (
    <Box
      as={Link}
      to={`/launch-pads/${launchPad.site_id}`}
      boxShadow="md"
      borderWidth="1px"
      rounded="lg"
      overflow="hidden"
      position="relative"
    >
      <Box p="6">
        <Box d="flex" alignItems="baseline">
          {launchPad.status === "active" ? (
            <Badge px="2" variant="solid" variantColor="green">
              Active
            </Badge>
          ) : (
            <Badge px="2" variant="solid" variantColor="red">
              Retired
            </Badge>
          )}
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {launchPad.attempted_launches} attempted &bull; {launchPad.successful_launches} succeeded
          </Box>
        </Box>

        <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
          {launchPad.name}
        </Box>
        <Text color="gray.500" fontSize="sm">
          {launchPad.vehicles_launched.join(", ")}
        </Text>

        <Flex justifyContent="flex-end">
          <Box>
            {isFavourite ? (
              <FiHeart style={{ color: "red" }} onClick={e => setFavouriteLaunchPad(launchPad, e)} />
            ) : (
              <FiHeart onClick={e => setFavouriteLaunchPad(launchPad, e)} />
            )}
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}
