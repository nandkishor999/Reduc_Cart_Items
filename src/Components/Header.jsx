import React from 'react'
import iml from './shopping-4372242_1280.png'
export default function Header(props) {
  return (
    <div className='cart'>
            <img src={iml} alt="product" />
            <span className='spn'>{props.carTdata.length}</span>

        </div>
  )
}
