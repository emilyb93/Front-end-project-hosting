import React, { useState, useEffect } from "react";
import { fetchLatestArticles } from "../../utils/Homepage";
import { slugImages } from "../../utils/SlugImages";
import "./Homepage.css";
import { Link } from "react-router-dom";

const Homepage = () => {
  const [homepageArticles, sethomepageArticle] = useState([]);

  useEffect(() => {
    fetchLatestArticles().then((articleList) => {
      sethomepageArticle(articleList);
    });
  }, []);

  return !homepageArticles ? (
    <section>
      <h3>Loading... One Moment Please</h3>
    </section>
  ) : (
    <section>
      {/* {console.log(homepageArticles, "in the homepage")} */}
      <h2 className="title">Latest articles</h2>
      <ul>
        {homepageArticles.map((article) => {
          return (
            <li className="article-card">
              <Link
                to={`/articles/id/${article.article_id}`}
                className="article-card"
              >
                <img
                  width="90%"
                  src={slugImages[article.topic]}
                  alt={article.title}
                />
                <div className="card-text">
                  <h3>{article.title}</h3>
                  <p>Topic: {article.topic}</p>
                  {/* sort out time since creation here */}
                  {/* <p>
                    {() => {
                      const date = new Date(article.created_at);
                      return date.getTime();
                    }}
                  </p> */}
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Homepage;
