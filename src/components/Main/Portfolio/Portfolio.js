// import './Porfolio.scss';
import "../Main.scss";
import { useEffect, useState } from "react";
import {
  useLocation,
  Link,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Presentation from "./Presentation";

function Portfolio({ setActiveTab }) {
  const [isReading, setIsReading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation().pathname.replace("/", "");

  useEffect(() => {
    setActiveTab(location);
  }, []);

  useEffect(() => {
    setIsReading(location.split("/")[1]);
  }, [location]);

  const handleSectionClick = () => {
    navigate("");
  };

  const portfolios = [
    {
      id: 1,
      title: "1번째 포트",
      content: "나의 1번째 포트입니다.",
      img: "경로",
    },
    {
      id: 2,
      title: "2번째 포트",
      content: "나의 2번째 포트입니다.",
      img: "경로",
    },
  ];

  return (
    <div className="Portfolio">
      포트폴리오 타이틀 / 참여 인원 이름은 이후 네트워크 링크에 사용합니다.{" "}
      <br /> 프로젝트 별 진행 상황 (진행률) 게시
      <br /> 세부 내용으로는 - 프로젝트 이름 / 목적 / 인원 / 사용 기술 /
      주목할만한 포인트 / 본인 역할 등등
      <ul className="portfolios">
        {portfolios.map((pf) => {
          return (
            <li key={`portfolio_${pf.id}`} className="list portfolio">
              <Link to={`/portfolio/${pf.id}`}>
                <h3>{pf.title}</h3>
                <p>{pf.content}</p>
                <div>진행률 --%</div>
                <div>이미지</div>
                <img src={pf.img} alt={pf.title} />
                <img />
              </Link>
            </li>
          );
        })}
      </ul>
      {isReading ? (
        <section onClick={handleSectionClick} className="presentationContainer">
          <Routes>
            {portfolios.map((pf, idx) => {
              return (
                <Route
                  key={pf.id}
                  path={`/${pf.id}`}
                  element={<Presentation props={pf} />}
                />
              );
            })}
          </Routes>
        </section>
      ) : null}
    </div>
  );
}

export default Portfolio;
