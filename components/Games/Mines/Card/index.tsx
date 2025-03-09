/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useState } from "react";

import Styles from "./Card.module.css";

const Card: React.FC<{ onFlipCard: () => Promise<Response> }> = ({ onFlipCard }) => {
  const [flip, setFlip] = useState(false);
  const [image, setImage] = useState(false);

  const handleFlipCard = function() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
        <div className={`${Styles["Card-back"]} ${Styles["Card-face"]}`}><img src={image ? 'url(/kk_frontend/images/diamind.png)' : 'url(/kk_frontend/images/mine.png)'}/></div>
      </div>
    </article>
  );
};

export default Card;
