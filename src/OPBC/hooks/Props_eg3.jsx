import React from 'react'

export default function Props_eg3(props) {
  return (
    <div>
        <h1>HI {props.name}, are you {props.age} ?</h1>
    </div>
  )
}

Props_eg3.defaultProps = {
  name: "menso",
  age: 231
}
