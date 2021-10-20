import { useArticles } from "../../utils/Articles";
import { slugImages } from "../../utils/SlugImages";
import { Link } from "react-router-dom";

const Articles = () => {
  const { allArticles, loading, err } = useArticles();

  // console.log(allArticles, "All");
  if (err) return <p>{err.status}</p>;
  if (loading) return <p>Loading. . .</p>;
  if (allArticles)
    return (
      <section>
        Displaying all articles:
        <ul>
          {Array.isArray(allArticles)}
          {allArticles.map((article) => {
            return (
              <li>
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

export default Articles;
