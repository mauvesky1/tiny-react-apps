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
  saveData = () => {
    localStorage.setItem("data", JSON.stringify(this.state));
  };

  sorter = () => {
    this.setState(function(currentState) {
      const newList = [...currentState.listItems];
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

  handleSubmit = string => {
    this.setState(currentState => {
      return {
        listItems: [...currentState.listItems, string]
      };
    });
  };

  componentDidMount() {
    const data = localStorage.getItem("data");
    if (data) {
      this.setState(JSON.parse(data));
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Form handleSubmit={this.handleSubmit} saveData={this.saveData} />
        <CheckList listItems={this.state.listItems} />
        <SortButton sorter={this.sorter} />
      </div>
    );
  }
}

export default App;
