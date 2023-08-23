import "./Main.scss";
import { Route, Routes } from "react-router-dom";
import Cover from "./Cover";
import Profile from "./Profile";
import Blog from "./Blog/Blog";
import Portfolio from "./Portfolio/Portfolio";
import Network from "./Network";
import Vision from "./Vision";

function Main({ setActiveTab, isHidden }) {
  return (
    <div className={"Main " + isHidden}>
      <section className={"contentArea " + isHidden}>
        {/* 라우트는 따로 관리해도 되는구나!  */}
        <Routes>
          <Route path="/" element={<Cover setActiveTab={setActiveTab} />} />
          <Route
            exact
            path="/profile"
            element={<Profile setActiveTab={setActiveTab} />}
          />
          <Route
            path="/blog/*"
            element={<Blog setActiveTab={setActiveTab} />}
          />
          <Route
            path="/portfolio/*"
            element={<Portfolio setActiveTab={setActiveTab} />}
          />
          <Route
            path="/network"
            element={
              <Network setActiveTab={setActiveTab} isHidden={isHidden} />
            }
          />
          <Route
            path="/vision"
            element={<Vision setActiveTab={setActiveTab} />}
          />
        </Routes>
      </section>
    </div>
  );
}
export default Main;
