import React, {useState} from 'react'
import Comp2 from './Comp2'

export default function Comp1() {
    const [nbre, setnbre] = useState(5)
    const editNbre = ()=>setnbre(nbre+1)
  return (
    <div>
        <h3>Comp1</h3>

        <Comp2  nbre={nbre} editNbre={editNbre}/>
    </div>
  )
}
