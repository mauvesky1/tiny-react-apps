import React from "react";
import "./App.css";
import Form from "./components/form";

class App extends React.Component {
  func = () => {
    return console.log("hello");
  };

  render() {
    return (
      <div>
        <Form func={this.func} />
        <h1>Checklist</h1>
      </div>
    );
  }
}

export default App;
