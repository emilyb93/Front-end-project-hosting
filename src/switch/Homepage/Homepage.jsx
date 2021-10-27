import React, { useState, useEffect } from "react";
import { fetchLatestArticles } from "../../utils/Homepage";
import { slugImages } from "../../utils/SlugImages";
import "./Homepage.css";
import { Link } from "react-router-dom";
import heartUnclicked from "../../graphics/heart-unclicked.svg";

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
      <ul>
        {homepageArticles.map((article) => {
          return (
            <li key={article.title}>
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
                  <p>{article.created_at.split("T")[0]}</p>
                  <span className="likes">
                    <img
                      height="20px"
                      width="20px"
                      src={heartUnclicked}
                      alt="likes"
                      className="heart-likes"
                    />
                    <p>{article.votes}</p>
                  </span>
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
