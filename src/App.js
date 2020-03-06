import React from "react";
import "./App.css";
import Form from "./components/form";
import Header from "./components/header";
import CheckList from "./components/list";
import SortButton from "./components/sort";

class App extends React.Component {
  state = {
    listItems: [
      { name: "DEF", number: 2 },
      { name: "ABC", number: 1 },
      { name: "XYZ", number: 3 }
    ]
  };
  sorter = () => {
    this.setState(function(currentState) {
      const newList = [...currentState.listItems];
      console.log(newList, "asfasf");
      return {
        listItems: newList.sort(function(a, b) {
          if (a.name > b.name) {
            return 1;
          }
          if (b.name > a.name) {
            return -1;
          }
          return 0;
        })
      };
    });
    return;
  };

  handleSubmit = event => {
    console.log("this is the console.log", event);
  };

  render() {
    return (
      <div>
        <Header />
        <Form handleSubmit={this.handleSubmit} />
        <CheckList listItems={this.state.listItems} />
        <SortButton sorter={this.sorter} />
      </div>
    );
  }
}

export default App;
