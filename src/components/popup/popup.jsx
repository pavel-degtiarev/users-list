import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./popup.module.scss";

function PopupHeader({ name }) {
  return (
    <header className={styles.popupHeader}>
      <h2 className={styles.popupTitle}>{name}</h2>
    </header>
  );
}

function PopupDetailsRow({ caption, auxStyle = "", data }) {
  return (
    <div className={styles.popupDetailsRow}>
      <p className={styles.popupDetailsCaption}>{caption}</p>
      <p className={classNames(styles.popupDetailsData, styles.popupText, auxStyle)}>{data}</p>
    </div>
  );
}

function PopupFooter({ text }) {
  return (
    <footer className={styles.popupFooter}>
      <div className={classNames(styles.popupAuxData, styles.popupAux)}>
        <h3 className={styles.popupAuxTitle}>Дополнительная информация:</h3>
        <p className={styles.popupAuxText}>{text}</p>
      </div>
    </footer>
  );
}

export function Popup({
  name,
  phone,
  email,
  hireDate,
  position,
  department,
  auxText = "",
  closeHandler,
}) {
  return (
    <section className={styles.popupContainer}>
      <div className={styles.popupContent}>
        <PopupHeader name={name} />

        <div className={styles.popupDetails}>
          <PopupDetailsRow caption="Телефон" auxStyle={styles.popupPhone} data={phone} />
          <PopupDetailsRow caption="Почта" auxStyle={styles.popupEmail} data={email} />
          <PopupDetailsRow caption="Дата приема:" data={hireDate} />
          <PopupDetailsRow caption="Должность:" data={position} />
          <PopupDetailsRow caption="Подразделение:" data={department} />
        </div>

        {auxText && <PopupFooter text={auxText} />}

        <button type="button" className={styles.popupClose} onClick={closeHandler}></button>
      </div>
    </section>
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

Popup.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string,
  hireDate: PropTypes.string,
  position: PropTypes.string,
  department: PropTypes.string,
  auxText: PropTypes.string,
  closeHandler: PropTypes.func,
};
