import React from "react"
import { SimpleGrid } from "@chakra-ui/core"
import { useSpaceXPaginated } from "utils/use-space-x"
import Error from "components/Error"
import Breadcrumbs from "components/Breadcrumbs"
import LaunchItem from "components/LaunchItem"
import LoadMoreButton from "components/LoadMoreButton"
import { PAGE_SIZE } from "utils/constants"

export default function Launches() {
  const { data, error, isValidating, setSize, size } = useSpaceXPaginated("/launches/past", {
    limit: PAGE_SIZE,
    order: "desc",
    sort: "launch_date_utc",
  })
  console.log(data, error)
  return (
    <div>
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Launches" }]} />
      <SimpleGrid m={[2, null, 6]} minChildWidth="350px" spacing="4">
        {error && <Error />}
        {data && data.flat().map(launch => <LaunchItem launch={launch} key={launch.flight_number} />)}
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
