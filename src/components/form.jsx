import React from "react";

class Form extends React.Component {
  state = { toDoText: "" };

  render() {
    return (
      <div>
        <label>
          To Do :<input type="text" name="toDoText"></input>
        </label>
        <button onClick={this.props.func}>Submit</button>
      </div>
    );
  }
}

export default Form;
