import axios from "axios"
import { useState, useEffect } from "react"



export const fetchAllArticles = async ()=>{
    const res = await axios.get('https://news-server-project.herokuapp.com/api/articles')
    // console.log(res.data.articles)
    return res.data.articles
}


const fetchAllSlugs = async ()=>{
    const res = await axios.get('https://news-server-project.herokuapp.com/api/topics')
    // console.log(res.data.topics)
    return res.data.topics
}

export const useArticles = ()=>{


        const [allArticles, setAllArticles] = useState(null);
        const [loading, setLoading] = useState(true)
        const [err, setErr] = useState(null)
        const [allSlugs, setAllSlugs] = useState(null)
        try{ useEffect(() => {
            setErr(null)
            setLoading(true)
            fetchAllSlugs().then((res)=>{
                setAllSlugs(res)
            })
            fetchAllArticles().then((res)=>{

                setAllArticles(res);
                setLoading(false)
            })
        }, [])}
        catch(err){
            console.log(err, "error")
            setErr(err)
        };

        return {allArticles, loading, err, allSlugs}
    
}