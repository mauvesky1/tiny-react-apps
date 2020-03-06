import React from "react";

function Checklist(props) {
  function toFinishTask(event) {
    console.log(this);
    event.target.classList.toggle("finished");
  }
  return (
    <ul id="toDoList">
      {props.listItems.map(item => {
        return (
          <li key={item.name}>
            <p onClick={toFinishTask}>
              {" "}
              Task: {item.name}, Urgency: {item.number}
            </p>{" "}
          </li>
        );
      })}
    </ul>
  );
}

export default Checklist;
