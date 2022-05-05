import { handleNewComment } from "../../utils/Comments";
import { useState } from "react";
import { Link } from "react-router-dom";

export const PostComment = ({ article_id, loggedIn, user, setComments }) => {
  const [newComment, setNewComment] = useState();

  return (
    <>
      {loggedIn && (
        <form
          onSubmit={async (e) => {
            setComments((currComments) => {
              const newComm = {
                author: user,
                article_id: article_id,
                votes: 0,
                created_at: Date(Date.now()),
                body: newComment,
              };
              return [newComm, ...currComments];
            });
            handleNewComment(newComment, article_id, user);
            e.preventDefault();
          }}
        >
          <input
            id="comment-input"
            type="text-area"
            rows="10"
            cols="50"
            onChange={(e) => {
              setNewComment(e.target.value);
            }}
            required={true}
          />
          <button>Post</button>
        </form>
      )}

      {!loggedIn && (
        <p>
          Please{" "}
          <Link
            to="/account"
            style={{ color: "blue", textDecoration: "underline" }}
          >
            Log in
          </Link>{" "}
          to post comments or vote.
        </p>
      )}
    </>
  );
};
