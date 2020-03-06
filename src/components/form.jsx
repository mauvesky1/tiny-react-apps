import React from "react";

class Form extends React.Component {
  state = { name: "", number: 0 };

  handleTextChange = event => {
    event.preventDefault();
    const { value } = event.target;

    this.setState({ name: value });
  };

  handleNumberChange = event => {
    event.preventDefault();
    const { value } = event.target;
    this.setState({ number: value });
  };

  render() {
    return (
      <form>
        <label>
          To Do :
          <input
            onChange={this.handleTextChange}
            type="text"
            name="toDoText"
          ></input>
        </label>
        <label>
          To Do :
          <input
            onChange={this.handleNumberChange}
            type="number"
            name="toDoNumber"
          ></input>
        </label>
        <button
          type="submit"
          onClick={event => {
            event.preventDefault();
            this.props.handleSubmit(this.state);
          }}
        >
          Submit
        </button>
        <button type="button" onClick={this.props.saveData}>
          Save
        </button>
      </form>
    );
  }
}

export default Form;
