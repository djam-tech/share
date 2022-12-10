import React, {useEffect, useState} from 'react'

import {useParams} from 'react-router-dom'
import axios from 'axios'

export default function ArticleItem() {
  const [article, setArticle] = useState({})

  const {id} = useParams()
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products/'+id)
    .then(res=>setArticle(res.data))
    
    console.log('Article',article);
  
  }, [])
  
  return (
    <div>{article.title}</div>
  )
}

