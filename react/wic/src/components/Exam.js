import React, {useState} from 'react'

export default function ItemList() {
    const [items, setItems] = useState([
        {article:{id:0, title:'Article 1', disp:3}, qte:2},
        {article:{id:1, title:'Article 2', disp:4}, qte:1},
    ])
    // (1.5pt)
    const ajoutQte = (id) =>{
        const disp = items.find(el=>el.article.id===id).article.disp
        const newItems = items.map(el=>{
            if(el.article.id===id)
                return el.qte<disp?{...el, qte:el.qte+1}:el
            else
                return el
            })
        setItems(newItems)
    }
    //(1.5pt)
    const supQte = (id) =>{
        const newItems = items.map(el=>{
            if(el.article.id===id)
                return el.qte>0?{...el, qte:el.qte-1}:el
            else
                return el
            })
        setItems(newItems)
    }
    //(1pt)
  return (
    <div className='examen'>
        <h3>Examen</h3>
        <ul>
        {items.map((el,id)=><Item
            article ={el.article}
            qte = {el.qte}
            ajoutQte = {ajoutQte}
            supQte = {supQte}
        />)}
        </ul>
    </div>
  )
}

function Item({article, qte, ajoutQte, supQte}){
    //(1pt)
    return(
        <li>
          {article.title}
          <div className="qte">
            <input type="button" value="-" 
            onClick={()=>supQte(article.id)}
            />
            <span>{qte}</span>
            <input type="button" value="+" 
            onClick={()=>ajoutQte(article.id)}
            />
          </div>
        </li>
    )
}
