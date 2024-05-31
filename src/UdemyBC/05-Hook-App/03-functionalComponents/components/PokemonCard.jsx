import React from 'react'

export const PokemonCard = ({id, name, imgs}) => {
  return (
    <div>
        <h3>#{id} - {name}</h3>
        {imgs.map((img) => (
            <img key={img} src={img} />
        ))}
    </div>
  )
}
