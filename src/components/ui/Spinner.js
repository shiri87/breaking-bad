import React from "react"
import spinner from "../../img/spinner.gif"

const Spinner = () => {
  return <img src={spinner} alt='Loading' style={myStyle} />
}

export default Spinner

const myStyle = {
  width: "200px",
  margin: "auto",
  display: "block",
}
