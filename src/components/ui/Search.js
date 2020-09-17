import React, { useState } from "react"

const Search = ({ getQuery }) => {
  //text is a string, setText is the update function
  const [text, setText] = useState("")
  const onChange = (q) => {
    setText(q)
    getQuery(q)
  }
  return (
    <div>
      <section className='search'>
        <form action=''>
          <input
            type='text'
            className='form-control'
            placeholder='search characters'
            autoFocus
            value={text}
            onChange={(e) => onChange(e.target.value)}
          />
        </form>
      </section>
    </div>
  )
}

export default Search
