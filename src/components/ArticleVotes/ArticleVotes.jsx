import { useState, useContext } from "react";
import { UserContext } from "../../utils/Context";
import { handleArticleVotes } from "../../utils/SingleArticle";

export const ArticleVotes = ({ article_id, votes }) => {
  const [voteChange, setVoteChange] = useState(0);

  const { loggedIn } = useContext(UserContext);

  return (
    <div className="article-voter">
      <p>{votes}</p>
      <button
        className="article-vote-button"
        disabled={!loggedIn}
        onClick={() => {
          setVoteChange((voteChange) => {
            return voteChange + 1;
          });

          handleArticleVotes(article_id, +1);
        }}
      >
        <p className={`vote-button-up ${voteChange ? "vote-clicked" : ""}`}>
          {" "}
          {voteChange ? "♥" : "♡"}
        </p>
      </button>
    </div>
  );
};
