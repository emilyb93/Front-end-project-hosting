import { useArticles } from "../../utils/Articles";
import { slugImages } from "../../utils/SlugImages";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

const Articles = () => {
  const { allArticles, loading, err, allSlugs } = useArticles();
  const history = useHistory();
  // console.log(allArticles, "All");
  if (err) return <p>{err.status}</p>;
  if (loading) return <p>Loading. . .</p>;
  if (allArticles)
    return (
      <section>
        Displaying articles from:
        {/* This is the select for the topics */}
        <select
          name="topics"
          id="topic-selector"
          onChange={(e) => {
            history.push(`/articles${e.target.value}`);
          }}
        >
          <option value="/all">All</option>
          {allSlugs.map((slug) => {
            return <option value={`/${slug.slug}`}>{slug.slug}</option>;
          })}
        </select>
        {/* This is the select for the sort by options */}
        <p>Sort articles by: </p>
        <select>
          <option value="created_at">Date</option>
          <option value="comment_count">Comment Count</option>
          <option value="votes">Votes</option>
        </select>
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
