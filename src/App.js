import "./App.scss";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { useLocation } from "react-router-dom";

function App() {
  // state : "cover", "profile", "blog", "portfolio", "network", "vision"
  const [activeTab, setActiveTab] = useState("");
  const [isDark, setIsDark] = useState(false);
  const [isKorean, setIsKorean] = useState(true);
  const [isHidden, setIsHidden] = useState("");
  // const [isLogin, setIsLogin] = useState(true)

  useEffect(() => {
    let tempHidden;
    activeTab === "" ? (tempHidden = "") : (tempHidden = "hidden");
    setIsHidden(tempHidden);

    return () => {
      setIsHidden("");
    };
  }, [activeTab]);

  return (
    <div className={`App ${isDark ? "dark" : ""}`}>
      <Header
        activeTab={activeTab}
        isHidden={isHidden}
        setIsDark={setIsDark}
        isDark={isDark}
        setIsKorean={setIsKorean}
        isKorean={isKorean}
      />
      <Main setActiveTab={setActiveTab} isHidden={isHidden} />
      <Footer isHidden={isHidden} />
    </div>
  );
}

export default App;
