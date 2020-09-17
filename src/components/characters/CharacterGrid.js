import React from "react"
import Spinner from "../ui/Spinner"
import CharacterItem from "./CharacterItem"

// referring  useState// getting the props passed through from App.js
const CharacterGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <h1>
      Loading... <Spinner />
    </h1>
  ) : (
    <section className='cards'>
      {items.map((item) => (
        <CharacterItem key={item.char_id} item={item} />
      ))}
    </section>
  )
}

export default CharacterGrid
