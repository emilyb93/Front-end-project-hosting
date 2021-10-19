import { useState, useEffect } from "react";
import axios from "axios";


export const fetchSingleArticle = async (id)=>{
    console.log(id, "id")
   const res = await axios.get(`https://news-server-project.herokuapp.com/api/articles/${id}`)
    return res
}


export const useSingleArticle = (id)=>{
    const [article, setArticle] = useState({})
    const [loading, setLoading] = useState(false)
    const [err, setErr] = useState(null)
    
    try {useEffect(()=>{
        setLoading(true)
        setErr(null)
       fetchSingleArticle(id).then((res)=>{
           console.log(res.data.article)
           setArticle(res.data.article)

       })
        
        
        setLoading(false)

    }, [id])

 return {article,  loading, err}}
 catch(err){
     setErr(err)
 }


}