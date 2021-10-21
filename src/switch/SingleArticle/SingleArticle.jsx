import React, { useContext } from "react";
import { useParams } from "react-router";
import { PostComment, useComments, Votes } from "../../utils/Comments";
import { UserContext } from "../../utils/Context";
import { ArticleVotes, useSingleArticle } from "../../utils/SingleArticle";
import { slugImages } from "../../utils/SlugImages";
import "./SingleArticle.css";

const SingleArticle = () => {
  const { id } = useParams();
  const { user, loggedIn } = useContext(UserContext);
  const { article, loading, err } = useSingleArticle(id);
  const { comments, setComments } = useComments(id);

  if (err) return <p>Sorry, we couldn't find that one!</p>;
  if (loading) return <p>Loading ...</p>;
  return (
    <>
      <section>
        <img
          src={slugImages[article.topic]}
          alt={article.title}
          width="100vw"
          className="article-image"
        />
        <h2>{article.title}</h2>
        <p className="article-body">{article.body}</p>
        <ArticleVotes article_id={article.article_id} votes={article.votes} />
      </section>
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
                <p className="comment-author">Author: {comment.author} </p>
                <p className="comment-text">{comment.body}</p>
                <p>{Date(comment.created_at)}</p>

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
    </>
  );
};

export default SingleArticle;
