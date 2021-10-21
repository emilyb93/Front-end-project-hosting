import axios from "axios"
import { useState, useEffect } from "react"



export const fetchTopicArticles = async (topic, sortBy)=>{
    let axiosString = `https://news-server-project.herokuapp.com/api/articles`
    if(topic !== "all"){
        axiosString +=`?topic=${topic}&sort_by=${sortBy}`

    } else {
        axiosString += `?sort_by=${sortBy}`
    }
    
    // console.log(axiosString)
    const res = await axios.get(axiosString)
    // console.log(res, "fetch")
    return res.data
}

export const useTopics = (topic)=>{

    const [selectedOption, setSelectedOption] = useState("/")
    const [topicArticles, setAllArticles] = useState(null);
        const [loading, setLoading] = useState(true)
        const[sortBy, setSortBy] = useState("date")
        const [err, setErr] = useState(null)
            useEffect(() => {
            setErr(null)
            setLoading(true)
            fetchTopicArticles(topic, sortBy).then((res)=>{

                setAllArticles(res.articles);
                setLoading(false)
            }).catch((err)=>{
                console.log(err, "err")
                setErr(err)
            })
        }, [topic, sortBy])
       

        return {topicArticles, loading, err, selectedOption, setSelectedOption, sortBy, setSortBy}
    
}