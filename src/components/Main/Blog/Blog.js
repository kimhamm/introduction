import "../Main.scss";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Posts from "./Posts";

function Blog({ setActiveTab }) {
  const [activeCatecory, setActiveCategory] = useState("");
  const [isReading, setIsReading] = useState(false);
  const location = useLocation().pathname.replace("/", "");

  useEffect(() => {
    setActiveTab(location);
  }, []);

  useEffect(() => {
    const category = location.replace("blog/", "");
    setActiveCategory(category);
    setIsReading(category.split("/")[1]);
  }, [location]);

  const dummyCategory = ["dev", "history", "memo", "travel", "family", "etc"];

  return (
    <div className="Blog">
      <ul className={"categories "}>
        {dummyCategory.map((li) => {
          return (
            <li
              key={`categorie_${li}`}
              className={activeCatecory.includes(li) ? "active" : ""}
            >
              <Link to={"./" + li}>{li}</Link>
            </li>
          );
        })}
      </ul>
      <section className="postList">
        <Routes>
          {dummyCategory.map((li) => {
            return (
              <Route
                key={li}
                path={"/" + li + "/*"}
                element={<Posts category={li} isReading={isReading} />}
              />
            );
          })}
        </Routes>
      </section>
    </div>
  );
}

export default Blog;
