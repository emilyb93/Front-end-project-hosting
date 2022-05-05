import { useState, useEffect } from "react";
import axios from "axios";

export const fetchSingleArticle = async (id) => {
  console.log(id, "id");
  const res = await axios.get(
    `https://news-server-project.herokuapp.com/api/articles/${id}`
  );
  return res;
};

export const useSingleArticle = (id) => {
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  useEffect(() => {
    setErr(null);
    setLoading(true);
    window.scrollTo(0, 0);

    fetchSingleArticle(id)
      .then((res) => {
        console.log(res.data.article);
        setArticle(res.data.article);
      })
      .catch((err) => {
        setErr(err);
      });

    setLoading(false);
  }, [id]);

  return { article, loading, err };
};

const handleArticleVotes = (article_id, num) => {
  return axios({
    method: "patch",
    url: `https://news-server-project.herokuapp.com/api/articles/${article_id}`,
    data: {
      inc_votes: num,
    },
  });
};

export const ArticleVotes = ({ article_id, votes }) => {
  const [voteChange, setVoteChange] = useState(0);

  return (
    <>
      <button
        onClick={() => {
          setVoteChange((voteChange) => {
            return voteChange + 1;
          });

          handleArticleVotes(article_id, +1);
        }}
      >
        <p className="comment-vote-heart"> {voteChange ? "♥" : "♡"}</p>
      </button>
    </>
  );
};
