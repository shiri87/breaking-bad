import React, { useState, useEffect } from "react"
import "./App.css"
import axios from "axios"

//components
import Header from "./components/ui/Header"
import CharacterGrid from "./components/characters/CharacterGrid"
import Search from "./components/ui/Search"
import Episodes from "./components/ui/Episodes"

function App() {
  //this is an array called items. the update function is setItem
  const [items, setItems] = useState([])
  //this is a boolean variable called isLoading. the update function is setIsLoading
  const [isLoading, setIsLoading] = useState(true)

  const [query, setQuery] = useState("")

  const [episode, setEpisode] = useState("")

  useEffect(() => {
    const fetchItems = async () => {
      const res = await axios(
        `https://breakingbadapi.com/api/characters?name=${query}`
      )
      console.log(res.data)
      setItems(res.data)
      setIsLoading(false)
    }
    const fetchEpisodes = async () => {
      const res = await axios(
        `https://breakingbadapi.com/api/episodes/1`
        // ?series=${episode}`
      )
      setEpisode(res.data)
      setIsLoading(false)
    }
    fetchItems()
    fetchEpisodes()
  }, [query, episode]) //1st setup -> not gonna change --> so [] prevent keep loading it again
  //an empty array state that the use Effect will be called once _after the component has mounted

  return (
    <div className='container'>
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <Episodes getEpisodes={(q) => setEpisode(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  )
}

export default App
