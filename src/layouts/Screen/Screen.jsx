
import React from 'react'

// Custom
import Dock from 'layouts/dock/Dock'

// Styles
import style from './Screen.module.css'

const DisplayScreen = () => {
  return (
    <div className='grow bg-red-300 relative'>
        <div className='xx'>
            <div className='bg-white'>Dreggable</div>
        </div>
        <Dock />
    </div>
  )
}

export default DisplayScreen