import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LoginContainer from "./containers/loginContainer/loginContainer";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <LoginContainer />
      </header>
    </div>
  );
};

export default App;
