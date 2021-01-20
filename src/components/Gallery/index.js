import React from "react"
import { SimpleGrid, Image } from "@chakra-ui/core"

export default function Gallery({ images }) {
  return (
    <SimpleGrid my="6" minChildWidth="350px" spacing="4">
      {images.map(image => (
        <a href={image} key={image}>
          <Image src={image.replace("_o.jpg", "_z.jpg")} />
        </a>
      ))}
    </SimpleGrid>
  )
}
