import React from 'react'
import './Fifth_task.css'

import { Fifth_NavBar } from './Fifth_NavBar'
import { Fifth_Slides } from './Fifth_Slides'
import { Fifth_Cards } from './Fifth_Cards'
import { Fifth_Footer } from './Fifth_Footer'

export const Fifth_Task_HomePage = () => {
  return (
    <div>
        <Fifth_NavBar />
        <Fifth_Slides />
        <Fifth_Cards />
        <Fifth_Footer/>
    </div>
  )
}
