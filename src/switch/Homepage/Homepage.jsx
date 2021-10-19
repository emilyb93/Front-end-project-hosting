import React, { useState, useEffect } from "react";
import { fetchLatestArticles } from "../../utils/Homepage";
import { slugImages } from "../../utils/SlugImages";
import "./Homepage.css";

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
      {console.log(homepageArticles, "in the homepage")}
      <ul>
        {homepageArticles.map((article) => {
          return (
            <li className="article-list-item">
              <img
                width="90%"
                src={slugImages[article.topic]}
                alt={article.title}
              />
              <h2>{article.title}</h2>
              <p>Topic: {article.topic}</p>
              <p>Created at: {article.created_at}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Homepage;
