import React, { useEffect, useState } from "react"
import NavBar from "../NavBar"
import Navigation from "navigation/Navigation"
import {
  getFavouriteLaunchesFromStorage,
  setFavouriteLaunchesInStorage,
  getFavouriteLaunchPadsFromStorage,
  setFavouriteLaunchPadsInStorage,
} from "utils/launches-storage"

export default function App() {
  const [favouriteLaunches, setFavouriteLaunches] = useState([])
  const [favouriteLaunchPads, setFavouriteLaunchPads] = useState([])

  const setFavouriteLaunch = (launch, event) => {
    event.preventDefault()
    const newFavouriteLaunches = favouriteLaunches
    const item = (newFavouriteLaunches || []).findIndex(i => i.flight_number === launch.flight_number)
    item > -1 ? newFavouriteLaunches.splice(item, 1) : newFavouriteLaunches.push(launch)
    setFavouriteLaunches([...newFavouriteLaunches])
  }

  const setFavouriteLaunchPad = (launchPad, event) => {
    event.preventDefault()
    const newFavouriteLaunchPads = favouriteLaunchPads
    const item = (newFavouriteLaunchPads || []).findIndex(i => i.id === launchPad.id)
    item > -1 ? newFavouriteLaunchPads.splice(item, 1) : newFavouriteLaunchPads.push(launchPad)
    setFavouriteLaunchPads([...newFavouriteLaunchPads])
  }

  useEffect(() => {
    getFavouriteLaunchesFromStorage(setFavouriteLaunches)
  }, [])

  useEffect(() => {
    setFavouriteLaunchesInStorage(favouriteLaunches)
  }, [favouriteLaunches])

  useEffect(() => {
    getFavouriteLaunchPadsFromStorage(setFavouriteLaunchPads)
  }, [])

  useEffect(() => {
    setFavouriteLaunchPadsInStorage(favouriteLaunchPads)
  }, [favouriteLaunchPads])

  return (
    <div>
      <NavBar />
      <Navigation
        favouriteLaunches={favouriteLaunches}
        favouriteLaunchPads={favouriteLaunchPads}
        setFavouriteLaunch={setFavouriteLaunch}
        setFavouriteLaunchPad={setFavouriteLaunchPad}
      />
    </div>
  )
}
