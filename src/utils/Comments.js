import axios from "axios";
import { useState, useEffect } from "react";

export const fetchCommentsForPage = async (id) => {
  const res = await axios.get(
    `https://news-server-project.herokuapp.com/api/articles/${id}/comments`
  );
  return res;
};

export const useComments = (id) => {
  const [comments, setComments] = useState([]);
  const [commLoading, setCommLoading] = useState(false);
  const [commErr, setCommErr] = useState(null);

  try {
    useEffect(() => {
      setCommErr(null);
      setCommLoading(true);
      fetchCommentsForPage(id).then((res) => {
        console.log(res.data);
        setComments(res.data.comments);
      });
    }, [id]);
  } catch (err) {
    console.log(err);
  }
  return { comments, commLoading, commErr, setComments };
};

export const handleVotes = (comment_id, num) => {
  return axios({
    method: "patch",
    url: `https://news-server-project.herokuapp.com/api/comments/${comment_id}`,
    data: {
      inc_votes: num,
    },
  });
};

export const handleNewComment = (newComment, article_id, user) => {
  axios({
    method: "post",
    url: `https://news-server-project.herokuapp.com/api/articles/${article_id}/comments`,
    data: {
      username: user,
      body: newComment,
    },
  });
};
