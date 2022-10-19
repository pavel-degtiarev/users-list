import React, { memo, useRef } from "react";
import PropTypes from "prop-types";
import styles from "./search.field.module.scss";

export const Search = memo(function Search({ clickHandler }) {

  const inputRef = useRef(null);

  return (
    <div className={styles.search}>
      <input
        className={styles.searchField}
        type="text"
        name="searchField"
        id="searchField"
        ref={inputRef}
      />
      <button
        className={styles.searchButton}
        onClick={() => clickHandler(inputRef.current.value)}></button>
    </div>
  );
});

Search.propTypes = {
  clickHandler: PropTypes.func,
};
