import React from "react"
import { Routes, Route } from "react-router-dom"
import Launches from "../pages/Launches"
import Launch from "../pages/Launch"
import Home from "../pages/Home"
import LaunchPads from "../pages/LaunchPads"
import LaunchPad from "../pages/LaunchPad"

export default function Navigation() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/launches" element={<Launches />} />
        <Route path="/launches/:launchId" element={<Launch />} />
        <Route path="/launch-pads" element={<LaunchPads />} />
        <Route path="/launch-pads/:launchPadId" element={<LaunchPad />} />
      </Routes>
    </>
  )
}
