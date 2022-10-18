import React from "react";
import PropTypes from "prop-types";
import styles from "./container.module.scss";

export function Container({ children }) {
  console.log("render Container");

  return <div className={styles.container}>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node,
};
