import React, { memo } from "react";
import PropTypes from "prop-types";
import styles from "./cards.list.module.scss";
import { Card } from "../card/card";

export const CardsList = memo(function CardsList({ cards, cardClickHandler }) {
  return (
    <ul className={styles.cardsList}>
      {cards.map((card) => (
        <Card key={card.name} userData={card} clickHandler={cardClickHandler} />
      ))}
    </ul>
  );
})

CardsList.propTypes = {
  cards: PropTypes.array,
  cardClickHandler: PropTypes.func,
};
