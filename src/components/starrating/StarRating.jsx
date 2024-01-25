import { useState } from "react";
import "./starrating.css";
import { FaStar } from "react-icons/fa";

const StarRating = ({ noOfStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex);
  }

  function handleMouseEnter(getCurrentIndex) {
    setHover(getCurrentIndex);
  }

  function handleMouseLeave() {
    setHover(rating);
  }

  return (
    <>
      <div className="star-rating">
      <h1 className="project3">PROJECT 3 - STAR RATING</h1>
          <div className="starContainer">
          {[...Array(noOfStars)].map((_, index) => {
            index += 1;
            return (
              <FaStar
                key={index}
                className={index <= (hover || rating) ? "active" : "inactive"}
                onClick={() => handleClick(index)}
                onMouseMove={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave()}
                size={120}
              />
            );
          })}
          </div>
      </div>
    </>
  );
};

export default StarRating;
