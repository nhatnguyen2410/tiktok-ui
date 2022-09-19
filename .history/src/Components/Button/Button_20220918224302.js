import React from 'react'
import Test from '~/Test'


export default function Button() {
  return (
    <div>
      <button onClick={()=>{Test()}}>Click me !</button>
    </div>
  )
}
