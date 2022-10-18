import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./popup.module.scss";

export function PopupHeader({ name }) {
  return (
    <header className={styles.popupHeader}>
      <h2 className={styles.popupTitle}>{name}</h2>
    </header>
  );
}
export function PopupDetailsRow({ caption, auxStyle = "", data }) {
  return (
    <div className={styles.popupDetailsRow}>
      <p className={styles.popupDetailsCaption}>{caption}</p>
      <p className={classNames(styles.popupDetailsData, styles.popupText, auxStyle)}>{data}</p>
    </div>
  );
}
export function PopupFooter({ text }) {
  return (
    <footer className={styles.popupFooter}>
      <div className={classNames(styles.popupAuxData, styles.popupAux)}>
        <h3 className={styles.popupAuxTitle}>Дополнительная информация:</h3>
        <p className={styles.popupAuxText}>{text}</p>
      </div>
    </footer>
  );
}

PopupHeader.propTypes = {
  name: PropTypes.string,
};

PopupDetailsRow.propTypes = {
  caption: PropTypes.string,
  auxStyle: PropTypes.string,
  data: PropTypes.string,
};

PopupFooter.propTypes = {
  text: PropTypes.string,
};
