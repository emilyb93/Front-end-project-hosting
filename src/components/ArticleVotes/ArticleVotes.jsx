import { useState, useContext } from "react";
import { UserContext } from "../../utils/Context";
import { handleArticleVotes } from "../../utils/SingleArticle";

export const ArticleVotes = ({ article_id, votes }) => {
  const [voteChange, setVoteChange] = useState(0);

  const { loggedIn } = useContext(UserContext);

  return (
    <div className="article-voter">
      <p>{votes + voteChange}</p>
      <button
        className="article-vote-button"
        disabled={!loggedIn}
        onClick={() => {
          const votecrement = voteChange === 0 ? 1 : -1;
          setVoteChange((voteChange) => {
            return voteChange + votecrement;
          });

          handleArticleVotes(article_id, votecrement);
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
