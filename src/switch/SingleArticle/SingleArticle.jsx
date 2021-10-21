import React, { useContext } from "react";
import { useParams } from "react-router";
import { PostComment, useComments, Votes } from "../../utils/Comments";
import { UserContext } from "../../utils/Context";
import { ArticleVotes, useSingleArticle } from "../../utils/SingleArticle";
import { slugImages } from "../../utils/SlugImages";

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
        />
        <h2>{article.title}</h2>
        <p>{article.body}</p>
        <ArticleVotes article_id={article.article_id} votes={article.votes} />
      </section>
      <section>
        <h3>Comments</h3>
        <PostComment
          article_id={id}
          loggedIn={loggedIn}
          user={user}
          setComments={setComments}
        />
        <ul>
          {comments.map((comment) => {
            return (
              <li key={comment.comment_id}>
                <p>Author: {comment.author} </p>
                <p>{comment.body}</p>
                <Votes comment_id={comment.comment_id} votes={comment.votes} />

                <p>{comment.created_at}</p>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default SingleArticle;
