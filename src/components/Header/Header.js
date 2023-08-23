import "./Header.scss";
import Settings from "./Settings";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Header({
  activeTab,
  isHidden,
  setIsDark,
  isDark,
  setIsKorean,
  isKorean,
}) {
  const dummyTabs = ["profile", "blog", "portfolio", "network", "vision"];

  useEffect(() => {
    console.log("activeTab 변경: " + activeTab);
  }, [activeTab]);

  return (
    <div className={"Header " + isHidden}>
      <Link to="/" className="home">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="3 3 26 25"
          fill="#495057"
        >
          <path d="M 16 2.59375 L 15.28125 3.28125 L 2.28125 16.28125 L 3.71875 17.71875 L 5 16.4375 L 5 28 L 14 28 L 14 18 L 18 18 L 18 28 L 27 28 L 27 16.4375 L 28.28125 17.71875 L 29.71875 16.28125 L 16.71875 3.28125 Z M 16 5.4375 L 25 14.4375 L 25 26 L 20 26 L 20 16 L 12 16 L 12 26 L 7 26 L 7 14.4375 Z" />
        </svg>
      </Link>

      <h1 className="homeTitle">Myself 101</h1>
      <Settings
        setIsDark={setIsDark}
        isDark={isDark}
        setIsKorean={setIsKorean}
        isKorean={isKorean}
      />

      <ul className={"tabs"}>
        {dummyTabs.map((tab) => {
          return (
            <li key={tab} className={activeTab === tab ? "active" : ""}>
              <Link to={"/" + tab}>{tab}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Header;
