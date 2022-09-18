import React from "react";
import "./Hero.scss";

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
      <div className="image"></div>
    </div>
  );
}
