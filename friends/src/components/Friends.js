import React, { useState, useEffect } from "react";
import "../App.css";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import FriendsList from "./FriendsList";
import FriendForm from "./FriendForm";

const Friends = props => {
  const [friends, setFriends] = useState([]);
  const [newGet, setNewGet] = useState();

  useEffect(() => {
    setNewGet(false);
    axiosWithAuth()
      .get("/friends")
      .then(res => {
        console.log("GET", res.data);
        setFriends(res.data);
      })
      .catch(err => console.log(err));
  }, [newGet]);

  return (
    <div className="friends">
      <h1>Welcome to the Friends area!</h1>
      <FriendsList friends={friends} setNewGet={setNewGet} />
      <FriendForm setNewGet={setNewGet} />
    </div>
  );
};

export default Friends;
