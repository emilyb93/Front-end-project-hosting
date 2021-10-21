import axios from 'axios'

export const fetchLatestArticles = async ()=>{
    const articleList = await axios.get("https://news-server-project.herokuapp.com/api/articles?sort_by=date&order=asc")
    // console.log(articleList.data)
    const shortList = articleList.data.articles
    const shorterList = shortList.slice(0, 6)
    // console.log(shorterList, "shorter")
    return shorterList
    
}

