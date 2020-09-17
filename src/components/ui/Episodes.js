import React, { useState } from "react"

const Episodes = ({ getEpisodes }) => {
  //series
  const [series, setEpisode] = useState("")
  const onChange = (q) => {
    setEpisode(q)
    getEpisodes(q)
  }
  return (
    <div>
      <section className='search'>
        <form action=''>
          <input
            type='text'
            className='form-control'
            placeholder='search series'
            autoFocus
            value={series}
            onChange={(e) => onChange(e.target.value)}
          />
        </form>
      </section>
    </div>
  )
}

export default Episodes
