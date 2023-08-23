import "../Main.scss";

function Presentation({ props }) {
  const handlePresentationClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div className="Presentation" onClick={handlePresentationClick}>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  );
}

export default Presentation;
