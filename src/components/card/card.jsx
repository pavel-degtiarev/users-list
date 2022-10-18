import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./card.module.scss";

export function Card({ title, phone, email, clickHandler }) {
  return (
    <li className={styles.cardContainer} onClick={() => clickHandler(title)}>
      <article className={styles.card}>
        <header className={styles.cardHeader}>
          <h2 className={styles.cardTitle}>{title}</h2>
        </header>

        <section className={styles.cardDetails}>
          <p className={classNames(styles.cardPhone, styles.cardText)}>{phone}</p>
          <p className={classNames(styles.cardEmail, styles.cardText)}>{email}</p>
        </section>
      </article>
    </li>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string,
  clickHandler: PropTypes.func,
};
