import axios from "axios"
import { useState, useEffect } from "react"



export const fetchTopicArticles = async (topic)=>{
    const res = await axios.get(`https://news-server-project.herokuapp.com/api/articles?topic=${topic}`)
    console.log(res, "fetch")
    return res.data
}

export const useTopics = (topic)=>{


    const [topicArticles, setAllArticles] = useState(null);
        const [loading, setLoading] = useState(true)
        const [err, setErr] = useState(null)
            useEffect(() => {
            setErr(null)
            setLoading(true)
            fetchTopicArticles(topic).then((res)=>{

                setAllArticles(res.articles);
                setLoading(false)
            }).catch((err)=>{
                console.log(err, "err")
                setErr(err)
            })
        }, [topic])
       

        return {topicArticles, loading, err}
    
}