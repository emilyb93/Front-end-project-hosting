import axios from "axios";
import { useState, useEffect } from "react";

export const fetchCommentsForPage = async (id)=>{
    const res = await axios.get(`https://news-server-project.herokuapp.com/api/articles/${id}/comments`)
    return res
}


export const useComments = (id)=>{
    const [comments, setComments] = useState([])
    const [commLoading, setCommLoading] = useState(false)
    const [commErr, setCommErr] = useState(null)
    

    try{
        useEffect(()=>{
            setCommErr(null)
            setCommLoading(true)
            fetchCommentsForPage(id).then((res)=>{
                console.log(res.data)
                setComments(res.data.comments)
            })
        }, [id])


    }catch(err){
        console.log(err)
    }
    return {comments, commLoading, commErr, }


}

const handleVotes = (comment_id, num)=>{

   return axios({method: "patch",
        url:`https://news-server-project.herokuapp.com/api/comments/${comment_id}`,
        "data": {
            "inc_votes": num
          }
    })
// console.log(patchReq)

}

export const Votes = ({comment_id, votes})=>{
    const [voteChange, setVoteChange] = useState(0)


return<>
<p> {votes + voteChange}</p> <button
onClick={() => {
  setVoteChange((voteChange) => {
    return voteChange - 1;
  });

  handleVotes(comment_id, -1).then((res) => {
  });
}}
>
↓
</button>
<button
onClick={() => {
  setVoteChange((voteChange) => {
    return voteChange + 1;
  });

  handleVotes(comment_id, +1).then((res) => {
  });
}}
>
↑
</button>
</>
    }

    

