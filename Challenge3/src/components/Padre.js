import React from 'react'
import Hijo from './Hijo'
function Padre () {
  return (
    <div>
        <Hijo />
      <h2>soy padre</h2>
    </div>
  )
}
export default Padre;