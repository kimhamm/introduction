import "./Main.scss";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Vision({ setActiveTab }) {
  const location = useLocation().pathname.replace("/", "");
  useEffect(() => {
    setActiveTab(location);
  }, []);

  const visions = [
    {
      title: "비전1",
      description:
        "어떤 비전(항목)을 가지고 있고, 그 비전을 위해 어떤 로드맵을 가지고 있으며, 얼마나 달성하고 있는지를 프로필/포트폴리오/네트워크 등을 기반으로 표현합니다. 비전 타이틀 / 참여 인원 이름은 이후 네트워크 링크에 사용합니다.",
      projects: [
        { title: "프로젝트1", members: ["김", "이", "박"], progress: 0.1 },
        { title: "프로젝트1", members: ["김", "이", "박"], progress: 0.2 },
        { title: "프로젝트1", members: ["김", "이", "박"], progress: 0.3 },
        { title: "프로젝트1", members: ["김", "이", "박"], progress: 0.4 },
      ],
    },
    {
      title: "비전1",
      description: "비전1에 대한 설명",
      projects: [
        { title: "프로젝트1", members: ["김", "이", "박"], progress: 0.1 },
        { title: "프로젝트1", members: ["김", "이", "박"], progress: 0.2 },
        { title: "프로젝트1", members: ["김", "이", "박"], progress: 0.3 },
        { title: "프로젝트1", members: ["김", "이", "박"], progress: 0.4 },
      ],
    },
    {
      title: "비전1",
      description: "비전1에 대한 설명",
      projects: [
        { title: "프로젝트1", members: ["김", "이", "박"], progress: 0.1 },
        { title: "프로젝트1", members: ["김", "이", "박"], progress: 0.2 },
        { title: "프로젝트1", members: ["김", "이", "박"], progress: 0.3 },
        { title: "프로젝트1", members: ["김", "이", "박"], progress: 0.4 },
      ],
    },
  ];

  return (
    <div className="Vision">
      <ul className="visions">
        {visions.map((vision, idx) => {
          return (
            <li key={`vision_${idx}`} className="vision">
              <h3>{vision.title}</h3>
              <p>{vision.description}</p>
              <ul className="projects">
                {vision.projects.map((project, idx) => {
                  return (
                    <li key={`proj_${idx}`} className="project">
                      <h4>{project.title}</h4>
                      {project.members.map((member, idx) => {
                        return <span key={`member_${idx}`}>{member} </span>;
                      })}
                      <div className="progress">
                        <div
                          className="progressBar"
                          style={{ maxWidth: `calc(${project.progress}*100%)` }}
                        >
                          {project.progress * 100}%
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Vision;
