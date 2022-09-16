import React from "react";
import classes from "./LimitChar.module.scss";

const LimitChar = ({
  word,
  limit,
  hoverhide,
  className,
  styles,
  fitContent,
}) => {
  return (
    /* Send hover false or value except true to disable the hover functionality */
    <div
      className={
        classes.limit_char_container +
        ` ${className
          ? className
          : " " + " " + `${fitContent ? classes.noMax : ""}`
        }` +
        ` ${hoverhide ? "" : word?.length > limit ? classes.limit_char_hover : ""
        }`
      }
      styles={{ ...styles }}
    >
      {word && word?.length > limit
        ? word.substring(0, limit).replace("_", " ") + "..."
        : word?.replace("_", " ")}
      <div className={classes.full_word_show}>{word}</div>
    </div>
  );
};

export default LimitChar;
