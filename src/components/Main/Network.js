import "./Main.scss";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Network({ setActiveTab, isHidden }) {
  const location = useLocation().pathname.replace("/", "");
  useEffect(() => {
    setActiveTab(location);
  }, []);

  const networks = [
    { id: 1, name: "김", job: "designer", img: "", connectionWithMe: [{}] },
    { id: 2, name: "이", job: "Back-end", img: "", connectionWithMe: [{}] },
    { id: 3, name: "박", job: "Finance", img: "", connectionWithMe: [{}] },
    { id: 4, name: "최", job: "Front-end", img: "", connectionWithMe: [{}] },
    { id: 5, name: "조", job: "Planner", img: "", connectionWithMe: [{}] },
  ];

  return (
    <div className={"Network " + isHidden}>
      어떤 사람들(또는 조직)과 관계맺고 있는지 <br />+ 맺고 있는 관계는 어떤
      것인지(공통점, 접점, 시너지, 평가. 커리어, 포트폴리오 등 해당되는 내용을
      동적으로 추가하여 내용 채우기) <br />+ 해당 사람들의 페이지로 링크 <br />
      예를 들면, 프로필을 클릭할 시 그 사람이 나와 같이 밟은 코스, 함께한
      포트폴리오, 함께 가지는 비전 등을 자동으로 생성. 또한 그 사람의 페이지로
      이동하는 링크 버튼 추가
      <br />
      grid로 나열 또는 d3로 네트워크 그래프 만들기
      <ul className="networks">
        {networks.map((network) => {
          return (
            <li key={network.id} className="list network">
              <Link to="/">
                <div className="img">{network.img}</div>
                <div>{network.name}</div>
                <div>{network.job}</div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Network;
