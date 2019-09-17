import React from "react";
import "../App.css";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Friends = props => {
  const deleteFriend = id => {
    // console.log("ID", id);
    axiosWithAuth()
      .delete("/friends/" + id)
      .then(res => {
        console.log("ADD", res.data);
        props.setNewGet(true);
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="friendsList">
      {props.friends.map(item => {
        return (
          <div className="card" key={item.id}>
            <div className="buttonBox">
              <button
                onClick={() => deleteFriend(item.id)}
                className="deleteButton"
              >
                X
              </button>
            </div>
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
