import React from "react";
import "../App.css";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Friends = props => {
  const editFriend = id => {
    axiosWithAuth()
      .get("/friends/" + id)
      .then(res => {
        console.log("EDIT", res.data);
        props.setnewFriend({
          name: res.data.name,
          age: res.data.age,
          email: res.data.email
        });
      })
      .catch(err => console.log(err));
    props.setEdit(true);
  };

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
              <button onClick={() => editFriend(item.id)} className="button">
                &#9998;
              </button>
              <button onClick={() => deleteFriend(item.id)} className="button">
                &#10006;
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
