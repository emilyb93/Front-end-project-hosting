import { useState } from "react";
import { handleVotes } from "../../utils/Comments";

export const Votes = ({ comment_id, votes }) => {
  const [voteChange, setVoteChange] = useState(0);
  const [voteError, setVoteError] = useState(false);

  return (
    <span className="vote-system">
      <p className={`vote-count ${votes > 0 && "green"} ${votes < 0 && "red"}`}>
        {" "}
        {votes + voteChange}
      </p>
      <button
        className={`vote-button-up`}
        onClick={() => {
          if (voteChange === 0) {
            setVoteError(false);
            setVoteChange((voteChange) => {
              return voteChange + 1;
            });
            handleVotes(comment_id, +1).catch(() => {
              setVoteError(true);
            });
          }
        }}
      >
        <p className={`vote-text ${voteChange ? "vote-clicked" : ""}`}>
          {voteChange && !voteError ? "♥" : "♡"}
        </p>
      </button>
    </span>
  );
};
