import { useState } from "react";
import Button from "../buttons/button";
import "./card.css";

const Card = (props) => {
  const [count, setCount] = useState(0);
  const { food, onAddItem, onRemoveItem } = props;

  const handleIncrement = () => {
    setCount(prev => prev + 1);
    onAddItem(food);
  };

  const handleDecrement = () => {
    setCount(prev => prev - 1);
    onRemoveItem(food);
  };

  return (
    <div className="card">
      <span className={count === 0 ? "card__badge-hidden" : "card__badge"}>{count}</span>

      <div className="image__container">
        <img src={food.image} alt={food.name} width={"100%"} height={"200px"} />
      </div>

      <div className="card__body">
        <h1 className="card__title">{food.name}</h1>
        <div className="card__price">{food.price}</div>
      </div>

      <div className="hr"></div>

      <div className="btn__container">
        <Button title={'+'} onClick={handleIncrement} type={'add'} />
        {count !== 0 && (
          <Button
            title={'-'}
            type={'remove'}
            onClick={handleDecrement}
          />
        )}
      </div>
    </div>
  );
};

export default Card;