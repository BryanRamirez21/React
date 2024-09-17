import React from 'react'

export const PokemonCard = ({id, name, sprites=[]}) => {
    return (
        <>
            <section style={{height: 200}}>
                <h2 className=' capitalize'>#{id} - {name}</h2>
                <div>
                    {sprites.map(sprite => (
                        <img src={sprite} width={100} height={100}></img>
                    ))}
                </div>
            </section>
        </>
    )
}
