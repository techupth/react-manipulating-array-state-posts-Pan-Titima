import { useState } from "react";
import movies from "../data/movies";

function Posts() {

  const counterLike = [];
  {
    movies.map((item, index) => {
      counterLike.push(Number(item.likes));
    })
  }

  const [counterLikeChange, setCounterLikeChange] = useState([...counterLike]);
  const handleLikeClick = (index) => {
    const newCounterLike = [...counterLikeChange]
    newCounterLike[index] = newCounterLike[index] + 1;
    setCounterLikeChange(newCounterLike);
  }

  const handleDisLikeClick = (index) => {
    const newCounterLike = [...counterLikeChange]
    if(newCounterLike[index] > 0){
      newCounterLike[index] = newCounterLike[index] - 1;
      setCounterLikeChange(newCounterLike);
    }else{
      newCounterLike[index] = 0;
      setCounterLikeChange(newCounterLike);
    }
  }

  return (
    <div className="app-wrapper">
      <h1 className="app-title">Posts</h1>
      <div className="post-list">
    { movies.map((item, index) => { return (
     
        <div className="post-item" key={index}>
          <div className="post-header">
            <h2>Post Title #{index+1}</h2>
            <div className="post-social-media-stats">
              <span className="stats-topic">Likes: </span>
              <span className="post-likes">{counterLikeChange[index]}</span>
            </div>
          </div>
          <p className="post-content">
            {item.content}
          </p>
          <div className="post-actions">
            <button className="like-button" onClick={ () => handleLikeClick(index)}>Like</button>
            <button className="dislike-button" onClick={ () => handleDisLikeClick(index)}>Dislike</button>
          </div>
        </div>
        )
      })
    }
      </div>
    </div>
  );
}

export default Posts;
