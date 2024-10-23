
export const PokemonCard = ({id, name, sprites=[]}) => {

  return (
    <>
      <h2>ID: {id} - {name}</h2>
      {
        sprites.map((sprite, id) => (
          <img key={id} src={sprite} width={100} height={100}></img>
        ))
      }
    </>
  )
}
