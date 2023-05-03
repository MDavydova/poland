import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCard } from "../../redux/features/cardSlice";
import "../CardWord/CardWord.scss";

const CardWord = ({ item }) => {
  const dispatch = useDispatch();

  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleDeleteClick = () => {
    dispatch(deleteCard(item._id));
  };

  return (
    <div className="word-card" key={item._id}>
      <div className={`word-card__wrapper ${isFlipped ? "is-flipper" : ""}`}>
        <div className="word-card__wrapper-face word-card__wrapper-front">
          {item.polish}
        </div>
        <div className="word-card__wrapper-face word-card__wrapper-back">
          {item.translation}
        </div>
      </div>
      <button onClick={handleDeleteClick}>Delete the card</button>
      <button onClick={handleCardClick}>Show translation</button>
    </div>
  );
};

export default CardWord;
