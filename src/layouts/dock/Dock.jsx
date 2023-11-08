import React from 'react'

import style from './Dock.module.css'

const Dock = () => {
  return (
    <section className={style['dock-container']}>
      <div draggable='true' className={style['dock']}>
        hi
      </div>
    </section>
  )
}

export default Dock