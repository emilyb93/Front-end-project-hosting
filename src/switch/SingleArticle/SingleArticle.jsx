import React, { useState } from "react";
import { useParams } from "react-router";
import { useComments, Votes, VotesDown, VotesUp } from "../../utils/Comments";
import { ArticleVotes, useSingleArticle } from "../../utils/SingleArticle";
import { slugImages } from "../../utils/SlugImages";
import { handleVotes } from "../../utils/Comments";

const SingleArticle = () => {
  const { id } = useParams();
  const { article, loading, err } = useSingleArticle(id);
  const { comments, commLoading, commErr } = useComments(id);

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
        <ul>
          {comments.map((comment) => {
            return (
              <li key={comment.comment_id}>
                <p>comment-id: {comment.comment_id}</p>
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
