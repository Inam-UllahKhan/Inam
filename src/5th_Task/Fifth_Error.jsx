import React from 'react'
import { NavLink } from 'react-router-dom'

export const Fifth_Error = () => {
    return (
        <div className='w-100 h-100 mt-5 text-center'>
            <h1>Oops! You seem to be lost.</h1>
            <p>Here are some helpful links:</p>
            <NavLink to='/'>Home</NavLink>
        </div>
    )
}
