import React from "react";
import { useParams } from "react-router";
import { useComments } from "../../utils/Comments";
import { useSingleArticle } from "../../utils/SingleArticle";
import { slugImages } from "../../utils/SlugImages";

const SingleArticle = () => {
  const { id } = useParams();
  const { article, loading, err } = useSingleArticle(id);
  const { comments, commLoading, commErr } = useComments(id);

  if (err) return <p>Sorry, we couldn't find that one!</p>;
  if (loading) return <p>Loading ...</p>;
  return (
    <>
      <section>
        {console.log(article)}
        <img
          src={slugImages[article.topic]}
          alt={article.title}
          width="100vw"
        />
        <h2>{article.title}</h2>
        <p>{article.body}</p>
      </section>
      <section>
        <h3>Comments</h3>
        <ul>
          {comments.map((comment) => {
            return (
              <li>
                <p>Author: {comment.author} </p>
                <p>{comment.body}</p>
                <p>Votes: {comment.votes}</p>
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
