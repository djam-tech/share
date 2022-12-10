import React, {useState, useEffect} from 'react'
import axios from 'axios'
const url ='https://fakestoreapi.com/products/'
export default function ArticlesList() {
  const [articles, setArticles] = useState([])
  const [loading , setLoading] = useState(true)
  console.log('ARTICLES',articles);

  
  const removeArticle=async (id)=>{
    const res = await axios.delete(url+id+'/')
    setArticles(articles.filter(el=>el.id!==id))

  }

  useEffect( ()=>{
   setTimeout(()=> {axios.get('https://fakestoreapi.com/products/')
    .then(res=>{
      setArticles(res.data.slice(0,5)); setLoading(false)})
    .catch(err=>console.log(err))
    },2000)
  }, [])


  return (
    <div>
      {loading?<p>Loading.....</p>:<ul style={{color:'grey'}}>
        {articles.map(el=><div
        style={{color:'black'}}
        >
          {el.title}
          <button
          onClick={()=>removeArticle(el.id)}
          >X</button>
        </div>)}
      </ul>}

    </div>
  )
}
