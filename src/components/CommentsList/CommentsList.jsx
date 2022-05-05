import React, { useContext } from "react";
import { PostComment } from "../PostComment/PostComment";
import { useComments } from "../../utils/Comments";
import { UserContext } from "../../utils/Context";
import { Votes } from "../Votes/Votes";
import "./CommentsList.css";

function CommentsList({ id }) {
  const { user, loggedIn } = useContext(UserContext);
  const { comments, setComments } = useComments(id);
  return (
    <section className="comment-container">
      <h3>Comments</h3>
      <PostComment
        article_id={id}
        loggedIn={loggedIn}
        user={user}
        setComments={setComments}
        className="post-comment"
      />
      <ul className="comments-list">
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id} className="comment-card">
              <span>
                <p className="comment-author">{comment.author} </p>
                <p className="comment-date">
                  {comment.created_at.split("T")[0]}
                </p>
              </span>
              <p className="comment-text">{comment.body}</p>

              <Votes
                className="votes"
                comment_id={comment.comment_id}
                votes={comment.votes}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default CommentsList;
