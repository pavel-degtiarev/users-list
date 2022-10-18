import React from "react";
import PropTypes from "prop-types";
import styles from "./cards.list.module.scss";
import { Card } from "../card/card";

export function CardsList({ cards, cardClickHandler }) {
  return (
    <ul className={styles.cardsList}>
      {cards.map((card, index) => (
        <Card
          key={card.name}
          title={card.name}
          phone={card.phone}
          email={card.email}
          clickHandler={cardClickHandler}
        />
      ))}
    </ul>
  );
}

CardsList.propTypes = {
  cards: PropTypes.array,
  cardClickHandler: PropTypes.func,
};
