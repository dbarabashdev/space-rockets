const getFavouriteLaunchesFromStorage = setFavouriteLaunches => {
  const favouriteLaunches = JSON.parse(localStorage.getItem("favouriteLaunches")) || []
  favouriteLaunches.length > 0 && setFavouriteLaunches(favouriteLaunches)
}

const setFavouriteLaunchesInStorage = favouriteLaunches => {
  localStorage.setItem("favouriteLaunches", JSON.stringify(favouriteLaunches))
}

const getFavouriteLaunchPadsFromStorage = setFavouriteLaunchPads => {
  const favouriteLaunchPads = JSON.parse(localStorage.getItem("favouriteLaunchPads")) || []
  favouriteLaunchPads.length > 0 && setFavouriteLaunchPads(favouriteLaunchPads)
}

const setFavouriteLaunchPadsInStorage = favouriteLaunchPads => {
  localStorage.setItem("favouriteLaunchPads", JSON.stringify(favouriteLaunchPads))
}

export {
  getFavouriteLaunchesFromStorage,
  setFavouriteLaunchesInStorage,
  getFavouriteLaunchPadsFromStorage,
  setFavouriteLaunchPadsInStorage,
}
