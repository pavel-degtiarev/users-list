import React from "react";
import PropTypes from "prop-types";

import { PopupHeader, PopupDetailsRow, PopupFooter } from "./popup.components";

import styles from "./popup.module.scss";

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
