import "./Header.scss";

function Settings({ setIsDark, isDark, setIsKorean, isKorean }) {
  // console.log(
  //   `Mode : ${isDark ? "Dark" : "Light"} / ${isKorean ? "KO" : "EN"}`
  // );

  const handleClickDark = () => {
    setIsDark(!isDark);
  };
  const handleClickKorean = () => {
    setIsKorean(!isKorean);
  };

  return (
    <div className="Settings">
      <ul>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="4 16 38 16"
            fill="#495057"
          >
            <path d="M24.45 42v-3H39V9H24.45V6H39q1.2 0 2.1.9.9.9.9 2.1v30q0 1.2-.9 2.1-.9.9-2.1.9Zm-3.9-9.25L18.4 30.6l5.1-5.1H6v-3h17.4l-5.1-5.1 2.15-2.15 8.8 8.8Z" />
          </svg>
        </li>
        <li onClick={handleClickDark}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="3 0 34 40"
            fill="#495057"
          >
            <path d="M20 38.792q-1.542 0-2.667-1.209-1.125-1.208-1.125-3h7.584q0 1.792-1.125 3-1.125 1.209-2.667 1.209Zm-7.042-6.75v-3.334h14.084v3.334Zm.292-5.834q-3.083-1.958-5-5-1.917-3.041-1.917-6.833 0-5.583 4.021-9.604Q14.375.75 20 .75q5.583 0 9.646 4.021 4.062 4.021 4.062 9.604 0 3.792-1.896 6.833-1.895 3.042-5.062 5Z" />
          </svg>
        </li>
        <li onClick={handleClickKorean}>
          <svg viewBox="1 14 24 20" fill="#495057">
            <text x="0" y="30">
              {isKorean ? "KO" : "EN"}
            </text>
          </svg>
        </li>
      </ul>
    </div>
  );
}

export default Settings;
