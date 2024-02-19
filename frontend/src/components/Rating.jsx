import React from "react";
import { FaStar, FaStarHalf, FaRegStar } from "react-icons/fa";
const Rating = ({ value, text }) => {
  const renderStar = (starValue) => {
    return (
      <span key={starValue}>
        {value >= starValue ? <FaStar /> : value >= starValue - 0.5 ? <FaStarHalf /> : <FaRegStar />}
      </span>
    );
  };

  return (
    <div className="rating">
      {[...Array(5)].map((_, index) => renderStar(index + 1))}
      <span className="rating-text">{text && text}</span>
    </div>
  );
};

export default Rating;
