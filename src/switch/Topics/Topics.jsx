import React from "react";
import { useParams } from "react-router";
import { useTopics } from "../../utils/Topics";
import { slugImages } from "../../utils/SlugImages";
import { Link } from "react-router-dom";

const Topics = () => {
  const { topic } = useParams();
  const { topicArticles, loading, err } = useTopics(topic);

  //   if (err.status === 404) return <p>404 - Page Not Found</p>;
  if (err) return <p>Sorry, we couldn't find that one!</p>;
  if (loading) return <p>Loading. . .</p>;
  if (topicArticles)
    return (
      <section>
        <p>Results for '{topic}'</p>
        <ul>
          {topicArticles.map((article) => {
            return (
              <li>
                {" "}
                <Link to={`/articles/id/${article.article_id}`}>
                  <img
                    alt={article.title}
                    src={slugImages[article.topic]}
                    width="70%"
                  />
                  <p>{article.title}</p>
                  <p>Votes: {article.votes}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    );
};

export default Topics;
