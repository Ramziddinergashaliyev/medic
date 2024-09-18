import React from "react";
import { FEEDBACK } from "../../static";

import { FaStar } from "react-icons/fa";

import "./feedback.scss";

const Feedback = () => {
  const feedbackCard = FEEDBACK?.map((el) => (
    <div className="feedback__card">
      <div className="feedback__card-top">
        <div className="feedback__card-top-about">
          <h4>{el?.title}</h4>
          <span>{el?.watch}</span>
        </div>
        <div className="feedback__card-top-star">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
      </div>
      <p className="feedback__card-title">{el?.desc}</p>
    </div>
  ));

  return (
    <div className="feedback container">
      <h3 className="feedback__title">Отзывы</h3>
      <div className="feedback__cards">{feedbackCard}</div>
    </div>
  );
};

export default Feedback;
