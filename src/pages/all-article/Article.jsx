import React from "react";
import { ARTICL } from "../../static";
import { MdOutlineArrowRight } from "react-icons/md";

import "./article.scss";

const Article = () => {
  const ArticleData = ARTICL?.map((el) => (
    <div key={el?.id} className="article__card">
      <div className="article__card__img">
        <img src={el?.img} alt="" />
      </div>
      <div className="article__card__info">
        <h2 className="article__card__info-title">{el?.title}</h2>
        <p className="article__card__info-text">{el?.desc}</p>
        <div className="article__card__info-bottom">
          <p>04.11.2020</p>
          <button>
            читать <MdOutlineArrowRight />
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="article container">
      <h2 className="article__title">Статьи</h2>
      <div className="article__cards">{ArticleData}</div>
    </div>
  );
};

export default Article;
