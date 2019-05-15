import * as React from "react";
import TextBox from "../../components/textBox/textBox";
import styles from "./loginContainer.module.scss";

export interface IProps {}

export interface IState {}

class LoginContainer extends React.Component<IProps, IState> {
  render() {
    return (
      <article>
        <div className={styles.logo}>livePoint</div>
        <section className={styles.inputSection}>
          Login
          <TextBox />
          Password
          <TextBox />
        </section>
      </article>
    );
  }
}

export default LoginContainer;
