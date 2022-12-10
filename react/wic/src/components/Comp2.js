import React from 'react'
import Comp3 from './Comp3'

export default function Comp2(props) {
    const {nbre, editNbre} = props
  return (
    <div>
        <h3>Comp2</h3>
        <Comp3 nbre={nbre} editNbre={editNbre}/>
    </div>
  )
}
