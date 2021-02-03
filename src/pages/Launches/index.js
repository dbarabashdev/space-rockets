import React, { Suspense } from "react"
import { SimpleGrid, Spinner, Flex } from "@chakra-ui/core"
import { useSpaceXPaginated } from "utils/use-space-x"
import Error from "components/Error"
import Breadcrumbs from "components/Breadcrumbs"
import LaunchItem from "components/LaunchItem"
import LoadMoreButton from "components/LoadMoreButton"
import { PAGE_SIZE } from "utils/constants"
import Sidebar from "components/Sidebar"

export default function Launches({ favouriteLaunches, setFavouriteLaunch }) {
  const { data, error, isValidating, setSize, size } = useSpaceXPaginated("/launches/past", {
    limit: PAGE_SIZE,
    order: "desc",
    sort: "launch_date_utc",
  })

  return (
    <div>
      <Suspense fallback={<Spinner />}>
        <Flex p="6" flexDirection="row" justifyContent="space-between" alignItems="center">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Launches" }]} />
          <Sidebar favouriteItems={favouriteLaunches} setFavouriteLaunch={setFavouriteLaunch} />
        </Flex>
        <SimpleGrid m={[2, null, 6]} minChildWidth="350px" spacing="4">
          {error && <Error />}
          {data &&
            data
              .flat()
              .map(launch => (
                <LaunchItem
                  favouriteLaunches={favouriteLaunches}
                  setFavouriteLaunch={setFavouriteLaunch}
                  launch={launch}
                  key={launch.flight_number}
                />
              ))}
        </SimpleGrid>
        <LoadMoreButton
          loadMore={() => setSize(size + 1)}
          data={data}
          pageSize={PAGE_SIZE}
          isLoadingMore={isValidating}
        />
      </Suspense>
    </div>
  )
}
