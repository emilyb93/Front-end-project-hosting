import React, { useState, useEffect } from "react";
import { fetchLatestArticles } from "../../utils/Homepage";
import { slugImages } from "../../utils/SlugImages";
import "./Homepage.css";
import { Link } from "react-router-dom";
import heartList from "../../graphics/heart-list.svg";

const Homepage = () => {
  const [homepageArticles, sethomepageArticles] = useState([]);

  useEffect(() => {
    fetchLatestArticles().then((articleList) => {
      sethomepageArticles(articleList);
    });

    window.scrollTo(0, 0);
  }, []);

  return homepageArticles.length === 0 ? (
    <section>
      <h3>Loading... One Moment Please</h3>
    </section>
  ) : (
    <section>
      {/* {console.log(homepageArticles, "in the homepage")} */}
      <h2 className="title">Latest articles</h2>
      <ul className="article-card-list-container">
        {homepageArticles.map((article) => {
          return (
            <li className="article-card-container" key={article.title}>
              <Link
                to={`/articles/id/${article.article_id}`}
                className="article-card"
              >
                <img
                  className="article-card-image"
                  src={slugImages[article.topic]}
                  alt={article.title}
                />
                <div className="card-text">
                  <h3>{article.title}</h3>
                  <p>Topic: {article.topic}</p>
                  <p>{article.created_at.split("T")[0]}</p>
                  <div className="likes">
                    <img
                      height="20px"
                      width="20px"
                      src={heartList}
                      alt="likes"
                      className="heart-likes"
                    />
                    <p className="article-vote-count">{article.votes}</p>
                  </div>
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
