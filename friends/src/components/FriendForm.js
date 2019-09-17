import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import "../App.css";

const FriendForm = props => {
  //   console.log("Login", props);
  const [newFriend, setnewFriend] = useState({
    name: "",
    age: "",
    email: ""
  });

  //   console.log("newFCred", newFriend);
  const handleChange = e => {
    setnewFriend({
      ...newFriend,
      [e.target.name]: e.target.value
    });
  };

  const add = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/friends", newFriend)
      .then(res => {
        console.log("ADD", res.data);
        setnewFriend({
          name: "",
          age: "",
          email: ""
        });
        props.setFriends([]);
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <form onSubmit={add}>
        <input
          type="name"
          name="name"
          value={newFriend.name}
          onChange={handleChange}
          placeholder="name"
        />
        <input
          type="age"
          name="age"
          value={newFriend.age}
          onChange={handleChange}
          placeholder="age"
        />
        <input
          type="email"
          name="email"
          value={newFriend.email}
          onChange={handleChange}
          placeholder="email"
        />
        <button>Add Friend</button>
      </form>
    </div>
  );
};

export default FriendForm;
