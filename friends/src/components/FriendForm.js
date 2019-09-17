import React, { useState } from "react";
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
  };

  return (
    <div>
      <form onSubmit={add}>
        <input
          type="name"
          name="name"
          value={props.newFriend.name}
          onChange={handleChange}
          placeholder="name"
        />
        <input
          type="age"
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
        <button>Add Friend</button>
      </form>
    </div>
  );
};

export default FriendForm;
