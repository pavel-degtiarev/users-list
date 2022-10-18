import React, { memo } from "react";
import PropTypes from "prop-types";
import styles from "./search.field.module.scss";

export const Search = memo(function Search({ clickHandler }) {
  console.log("render Search");

  return (
    <div className={styles.search}>
      <input className={styles.searchField} type="text" name="searchField" id="searchField" />
      <button className={styles.searchButton} onClick={clickHandler}></button>
    </div>
  );
});

Search.propTypes = {
  clickHandler: PropTypes.func,
};
