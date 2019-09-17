import React from "react";
import "../App.css";

const Friends = props => {
  return (
    <div className="friendsList">
      {props.friends.map(item => {
        return (
          <div className="card" key={item.id}>
            <h3>{item.name}</h3>
            <p>Age {item.age}</p>
            <p>Email {item.email}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Friends;
