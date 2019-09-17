import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import "../App.css";

const FriendForm = props => {
  //   console.log("Login", props);

  //   console.log("newFCred", newFriend);
  const handleChange = e => {
    props.setnewFriend({
      ...props.newFriend,
      [e.target.name]: e.target.value
    });
  };

  const add = e => {
    if (props.edit) {
      e.preventDefault();
      const { id, ...rest } = props.newFriend;
      axiosWithAuth()
        .put("/friends/" + props.newFriend.id, { ...rest })
        .then(res => {
          console.log("COMMIT-EdIT", res.data);
          props.setnewFriend({
            id: "",
            name: "",
            age: "",
            email: ""
          });
          props.setNewGet(true);
        })
        .catch(err => console.log(err));
    } else {
      e.preventDefault();
      axiosWithAuth()
        .post("/friends", props.newFriend)
        .then(res => {
          console.log("ADD", res.data);
          props.setnewFriend({
            name: "",
            age: "",
            email: ""
          });
          props.setNewGet(true);
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <div>
      <form onSubmit={add}>
        <input type="hidden" name="id" value={props.newFriend.id} />
        <input
          type="text"
          name="name"
          value={props.newFriend.name}
          onChange={handleChange}
          placeholder="name"
        />
        <input
          type="text"
          name="age"
          value={props.newFriend.age}
          onChange={handleChange}
          placeholder="age"
        />
        <input
          type="email"
          name="email"
          value={props.newFriend.email}
          onChange={handleChange}
          placeholder="email"
        />
        {props.edit ? (
          <button>Edit Friend</button>
        ) : (
          <button>Add Friend</button>
        )}
      </form>
    </div>
  );
};

export default FriendForm;
