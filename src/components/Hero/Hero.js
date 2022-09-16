import React from "react";
import "./Hero.scss";
import promo from "../../vector/nootris.png";
import ginger from "../../vector/ginger.png";
import lemon from "../../vector/Lemon.png";

export default function Hero() {
  return (
    <div className="promo">
      <div className="promo__text">
        <div className="promo__text-top">
          <h1>Активируй иммунитет!</h1>
          <p>
            Всего пять секунд в день помогут укрепить иммунитет
            <br /> и повысить защитные силы организма
          </p>
        </div>
        <div className="promo__text-bottom">
          <h2>Nootris помогает</h2>
          <p>
            Вашему организму во время пандемии
            <br />и сезонных простуд
          </p>
        </div>
      </div>
      <div className="images">
        <img src={promo} alt="promo-img" className="promo-img" />
        <img src={ginger} alt="ginger-img" className="ginger-img" />
        <img src={lemon} alt="lemon-img" className="lemon-img" />
      </div>
    </div>
  );
}
