import React from "react";

function Checklist(props) {
  return (
    <ul id="toDoList">
      {props.listItems.map(item => {
        return (
          <li key={item.name}>
            {" "}
            <p>{item.name}</p>{" "}
          </li>
        );
      })}
    </ul>
  );
}

export default Checklist;
