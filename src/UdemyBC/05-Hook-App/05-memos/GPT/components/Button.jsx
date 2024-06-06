import React from 'react'

export const Button = React.memo(({action, typeButton}) => {
  console.log("rendered")
  return (
    <div>
      <button onClick={action}>{typeButton}</button>
    </div>
  )
});
