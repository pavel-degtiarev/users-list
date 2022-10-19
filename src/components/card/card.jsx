import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./card.module.scss";

export function Card({ userData, clickHandler }) {
  return (
    <li className={styles.cardContainer} onClick={() => clickHandler(userData)}>
      <article className={styles.card}>
        <header className={styles.cardHeader}>
          <h2 className={styles.cardTitle}>{userData.name}</h2>
        </header>

        <section className={styles.cardDetails}>
          <p className={classNames(styles.cardPhone, styles.cardText)}>{userData.phone}</p>
          <p className={classNames(styles.cardEmail, styles.cardText)}>{userData.email}</p>
        </section>
      </article>
    </li>
  );
}

Card.propTypes = {
  userData: PropTypes.object,
  clickHandler: PropTypes.func,
};
