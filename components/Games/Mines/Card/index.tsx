import React, { useState } from "react";

import Styles from "./Card.module.css";

const Diamond = require('./images/diamond.png');
const Mine = require('./images/mine.png');

const Card: React.FC<{ onFlipCard: () => Promise<Response> }> = ({ onFlipCard }) => {
  const [flip, setFlip] = useState(false);
  const [image, setImage] = useState(false);

  const handleFlipCard = function() {
    onFlipCard().then( (_: any) => {
      setImage(Boolean(Math.round(Math.random())));
      flip || setFlip(!flip);
    } ).catch( _ => {
      setImage(Boolean(Math.round(Math.random())));
      flip || setFlip(!flip);
    });
  }

  return (
    <article className={Styles.Card} onClick={handleFlipCard}>
      <div className={`${Styles["Card-content"]} ${flip && Styles['is-flipped']}`}>
        <div className={`${Styles["Card-front"]} ${Styles["Card-face"]}`} />
        <div className={`${Styles["Card-back"]} ${Styles["Card-face"]}`}><img src={image ? Diamond : Mine}/></div>
      </div>
    </article>
  );
};

export default Card;
