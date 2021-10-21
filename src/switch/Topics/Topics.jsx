import React from "react";
import { useHistory, useParams } from "react-router";
import { useTopics } from "../../utils/Topics";
import { slugImages } from "../../utils/SlugImages";
import { Link } from "react-router-dom";
import { useArticles } from "../../utils/Articles";
import "./Topics.css";

const Topics = () => {
  const { topic } = useParams();

  const {
    topicArticles,
    loading,
    err,
    selectedOption,
    setSelectedOption,
    setSortBy,
    sortBy,
  } = useTopics(topic);
  const { allSlugs } = useArticles();
  const history = useHistory();

  if (err) return <p>Sorry, we couldn't find that one!</p>;
  if (loading) return <p>Loading. . .</p>;
  if (topicArticles)
    return (
      <section>
        <div className="dropdowns">
          Displaying articles from:
          <select
            name="topics"
            id="topic-selector"
            value={selectedOption}
            onChange={(e) => {
              history.push(`/articles${e.target.value}`);
              setSelectedOption(e.target.value);
            }}
          >
            <option
              selected={() => {
                setSelectedOption("/all");
              }}
              value="/all"
            >
              All
            </option>
            {allSlugs.map((slug) => {
              return (
                <option
                  selected={(e) => {
                    setSelectedOption(`/${slug.slug}`);
                  }}
                  value={`/${slug.slug}`}
                >
                  {slug.slug}
                </option>
              );
            })}
          </select>
          <p>Sort articles by: </p>
          <select
            value={sortBy}
            onChange={(e) => {
              console.log("sort by", e.target.value);
              setSortBy(() => {
                return e.target.value;
              });
            }}
          >
            <option value="date">Date</option>
            <option value="votes">Votes</option>
          </select>
        </div>
        <ul>
          {topicArticles.map((article) => {
            return (
              <li>
                {" "}
                <Link
                  className="article-card"
                  to={`/articles/id/${article.article_id}`}
                >
                  <img
                    alt={article.title}
                    src={slugImages[article.topic]}
                    width="70%"
                  />
                  <div className="card-text">
                    <p>{article.title}</p>
                    <p>| {article.topic} |</p>
                    {/* <p>Votes: {article.votes}</p> */}
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    );
};

export default Topics;
