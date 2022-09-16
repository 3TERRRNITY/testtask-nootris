import React from "react";

export default function Discount() {
  return (
    <div className="discount">
      <h2>
        ПОЛУЧИ ЗАЩИТУ ИММУНИТЕТА <br />
        <span className="orange">СО СКИДКОЙ -15% ПЕРВЫМ!</span>
      </h2>
      <p className="discount-price">
        <span>750₽</span> 690₽
      </p>
      <div className="discount__benefits">
        <div className="discount__benefits-sideblock">
          <img src="" alt="ginger" />
          <p>
            Содержит
            <br />
            <span className="orange">имбирь</span>
          </p>
        </div>
        <div className="discount__benefits-mainblock">
          <img src="" alt="nootris" />
          <p>
            + Бесплатная доставка
            <br />
            <span className="orange">Специальная цена</span>
          </p>
        </div>
        <div className="discount__benefits-sideblock">
          <img src="" alt="virus" />
          <p>
            Нейтрализует
            <br />
            <span className="orange">вирусы</span>
          </p>
        </div>
      </div>
      <div className="discount__order">
        <button>Оформить заказ!</button>
      </div>
    </div>
  );
}
