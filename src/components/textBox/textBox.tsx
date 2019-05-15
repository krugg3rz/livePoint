import * as React from "react";
import styles from "./textBox.module.scss";

export interface IProps {}

export interface IState {}

class TextBox extends React.Component<IProps, IState> {
  render() {
    return <input className={styles.textBox} type="text" />;
  }
}

export default TextBox;
