import React from 'react'
import Cliploader from 'react-spinners/Cliploader'

const override = {
    display: 'block',
    margin: '100px auto',
}

function Spinner({isLoading}) {
  return (
    <Cliploader
        color='#4338ca'
        loading={isLoading}
        cssOverride={override}
        size={150}    
    />
  )
}

export default Spinner