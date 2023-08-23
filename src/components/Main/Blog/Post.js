import "../Main.scss";

function Post({ post }) {
  const handlePostClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div className="Post" onClick={handlePostClick}>
      <h3>{post.subject}</h3>
      <div>{post.mainText}</div>
    </div>
  );
}

export default Post;
