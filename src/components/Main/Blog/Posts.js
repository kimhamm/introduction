import "../Main.scss";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Post from "./Post";

function Posts({ category, isReading }) {
  const navigate = useNavigate();

  const handleSectionClick = () => {
    navigate("");
  };

  const dummyData = [
    {
      id: 1,
      subject: "여정의 시작",
      summary: "영혼의 출발점에 서다",
      mainText: "",
    },
    {
      id: 2,
      subject: "memo 탭의 경우 트위터 등의 텍스트 기반 sns와 연동하면 좋겠다",
      summary: "This is a summary of 2nd post",
      mainText: "본문 내용입니다.",
    },
    {
      id: 3,
      subject: "3번째 글",
      summary: "This is a summary of 3rd post",
      mainText: "본문 내용입니다.",
    },
    {
      id: 4,
      subject: "4번째 글",
      summary: "This is a summary of 4th post",
      mainText: "본문 내용입니다.",
    },
  ];

  return (
    <div className="Posts">
      <ul>
        {dummyData.map((li, idx) => {
          return (
            <li key={li.id} className="list blog">
              <Link to={"./" + (idx + 1)}>
                <h4>{li.subject}</h4>
                <p>{li.summary}</p>
              </Link>
            </li>
          );
        })}
      </ul>
      {isReading ? (
        <section onClick={handleSectionClick} className="postContainer">
          <Routes>
            {dummyData.map((li, idx) => {
              return (
                <Route
                  key={li.id}
                  path={"/" + (idx + 1)}
                  element={<Post post={li} />}
                />
              );
            })}
          </Routes>
        </section>
      ) : null}
    </div>
  );
}

export default Posts;
