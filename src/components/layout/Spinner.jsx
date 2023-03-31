import React from 'react'
import SpinnerGif from './assets/spinner.gif'

const Spinner = () => {
  return (
    <div className="w-100 mt-20 text-center">
      <img width={80} className="inline" src={SpinnerGif} alt="Loading" />
    </div>
  )
}

export default Spinner
