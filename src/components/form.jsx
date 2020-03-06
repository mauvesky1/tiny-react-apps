import React from "react";

class Form extends React.Component {
  state = { toDoText: "" };
  handleChange = event => {
    event.preventDefault();

    const { value } = event.target;
    this.setState({ toDoText: value });
  };
  render() {
    return (
      <form>
        <label>
          To Do :
          <input
            onChange={this.handleChange}
            type="text"
            name="toDoText"
          ></input>
        </label>
        <button
          onClick={() => {
            this.props.handleSubmit("heleo");
          }}
        >
          Submit
        </button>
      </form>
    );
  }
}

export default Form;
