import profileImg from "../../assets/profile.jpg";
import "./Main.scss";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Profile({ setActiveTab }) {
  const location = useLocation().pathname.replace("/", "");
  useEffect(() => {
    setActiveTab(location);
  }, []);

  return (
    <div className="Profile">
      <section id="summary">
        <div className="profileImgCont">
          <img id="profileImg" src={profileImg} alt="profile" />
        </div>
        <h3>Kimham</h3>
        <p id="introduction">
          사람들이 쉽게 자신의 프로필 페이지를 만들고, 소셜네트워킹이 가능하도록
          합니다. 더욱 독립적인 동시에 더욱 확장가능한 공간을 제공합니다.
          프로필의 이름 / 기타 정보는 단순 텍스트가 아니라 네트워크의 링크로
          사용합니다.
        </p>
      </section>
      <section id="details">
        <ul id="education">
          <h4>Education - 이수 증명서 스캔 후 클릭 시 모달로 게시</h4>
          <li>Degree of Management and Economics in Handong Univ.</li>
          <li>K-Digital Training</li>
        </ul>
        <ul id="ability">
          <h4>
            Ability - 클릭 시 각 기술로 진행한 프로젝트와 주요 적용점 모달로
            게시
          </h4>
          <li>HTML</li>
          <li>
            CSS
            <span>(반응형/styled-component/SCSS/Tailwind)</span>
          </li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>
            React.js
            <span>(Next.js/React Native)</span>
          </li>
          <li>D3.js</li>
          <li>Node.js</li>
          <li>MongoDB</li>
          <li>AWS</li>
          <li>Firebase</li>
          <li>SQL</li>
          <li>Git</li>
        </ul>
        <ul id="career">
          <h4>Career - 관련 자료 모달로 게시</h4>
          <li>좋은이웃</li>
          <li>Telus International AI Korea</li>
        </ul>
        <ul id="certificate">
          <h4>Certificate - 증명서 스캔 후 클릭 시 모달로 게시</h4>
          <li>정보처리기사</li>
          <li>SQL 전문가</li>
          <li>데이터분석 준전문가</li>
        </ul>
        <ul id="connect">
          <h4>Connect</h4>
          <li>Github : </li>
          <li>Gmail : </li>
          <li>Instagram : </li>
          <li>Twitter : </li>
        </ul>
      </section>
    </div>
  );
}

export default Profile;
