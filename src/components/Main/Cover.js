import "./Main.scss";
import coverImg from "../../assets/cover.jpeg";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Cover({ setActiveTab }) {
  const location = useLocation().pathname.replace("/", "");
  useEffect(() => {
    setActiveTab(location);
  }, []);

  return (
    <div className="Cover">
      <div className="coverContainer">
        <img id="coverImg" src={coverImg} alt="cover" />
        <p className="coverLetter">JOIN ONE AND START GROWING TODAY!</p>
      </div>
    </div>
  );
}

export default Cover;
