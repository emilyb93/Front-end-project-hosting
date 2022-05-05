import React from "react";
import { useParams } from "react-router";
import CommentsList from "../../components/CommentsList/CommentsList";
import { useSingleArticle } from "../../utils/SingleArticle";
import { slugImages } from "../../utils/SlugImages";
import "./SingleArticle.css";
import { ArticleVotes } from "../../components/ArticleVotes/ArticleVotes";

const SingleArticle = () => {
  const { id } = useParams();

  const { article, loading, err } = useSingleArticle(id);

  if (err) return <p>Sorry, we couldn't find that one!</p>;
  if (loading) return <p>Loading ...</p>;
  return (
    <>
      <section className="article-page">
        <h2>{article.title}</h2>
        <img
          src={slugImages[article.topic]}
          alt={article.title}
          width="10vw"
          className="article-image"
        />
        <p className="article-body">{article.body}</p>
        <ArticleVotes article_id={article.article_id} votes={article.votes} />
      </section>

      <CommentsList id={id} votes={article.votes}></CommentsList>
    </>
  );
};

export default SingleArticle;
