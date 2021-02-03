import React from "react"
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Alert,
  AlertIcon,
} from "@chakra-ui/core"
import LaunchPadItem from "../LaunchPadItem"
import LaunchItem from "../LaunchItem"

export default function Sidebar({ favouriteItems, setFavouriteLaunch }) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const renderDrawBody = () => {
    return (
      <DrawerBody>
        {favouriteItems.map(item =>
          item.id ? (
            <LaunchPadItem
              key={item.id}
              launchPad={item}
              favouriteLaunchPads={favouriteItems}
              setFavouriteLaunchPad={setFavouriteLaunch}
            />
          ) : (
            <LaunchItem
              key={item.flight_number}
              launch={item}
              favouriteLaunches={favouriteItems}
              setFavouriteLaunch={setFavouriteLaunch}
            />
          )
        )}
      </DrawerBody>
    )
  }

  const renderAlert = () => {
    return (
      <Alert status="warning">
        <AlertIcon />
        Seems your list still empty
      </Alert>
    )
  }

  return (
    <div>
      <Button onClick={onOpen}>Favourites list here</Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} scrollBehavior={"inside"}>
        <DrawerContent>
          <DrawerCloseButton />
          {Array.isArray(favouriteItems) && favouriteItems.length > 0 ? renderDrawBody() : renderAlert()}
        </DrawerContent>
      </Drawer>
    </div>
  )
}
