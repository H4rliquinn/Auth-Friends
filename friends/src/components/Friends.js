import React, { useState, useEffect } from "react";
import "../App.css";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import FriendsList from "./FriendsList";
import FriendForm from "./FriendForm";

const Friends = props => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/friends")
      .then(res => {
        console.log("GET", res.data);
        setFriends(res.data);
      })
      .catch(err => console.log(err));
  }, [friends]);

  return (
    <div className="friends">
      <h1>Welcome to the Friends area!</h1>
      <FriendsList friends={friends} />
      <FriendForm setFriends={setFriends} />
    </div>
  );
};

export default Friends;
