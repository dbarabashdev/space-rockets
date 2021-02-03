import React from "react"
import { SimpleGrid, Flex } from "@chakra-ui/core"
import Error from "components/Error"
import Breadcrumbs from "components/Breadcrumbs"
import LoadMoreButton from "components/LoadMoreButton"
import LaunchPadItem from "components/LaunchPadItem"
import Sidebar from "components/Sidebar"
import { useSpaceXPaginated } from "utils/use-space-x"
import { PAGE_SIZE } from "utils/constants"

export default function LaunchPads({ favouriteLaunchPads, setFavouriteLaunchPad }) {
  const { data, error, isValidating, size, setSize } = useSpaceXPaginated("/launchpads", {
    limit: PAGE_SIZE,
  })

  return (
    <div>
      <Flex p="6" flexDirection="row" justifyContent="space-between" alignItems="center">
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Launches" }]} />
        <Sidebar favouriteItems={favouriteLaunchPads} setFavouriteLaunchPad={setFavouriteLaunchPad} />
      </Flex>
      <SimpleGrid m={[2, null, 6]} minChildWidth="350px" spacing="4">
        {error && <Error />}
        {data &&
          data
            .flat()
            .map(launchPad => (
              <LaunchPadItem
                favouriteLaunchPads={favouriteLaunchPads}
                setFavouriteLaunchPad={setFavouriteLaunchPad}
                key={launchPad.site_id}
                launchPad={launchPad}
              />
            ))}
      </SimpleGrid>
      <LoadMoreButton
        loadMore={() => setSize(size + 1)}
        data={data}
        pageSize={PAGE_SIZE}
        isLoadingMore={isValidating}
      />
    </div>
  )
}
