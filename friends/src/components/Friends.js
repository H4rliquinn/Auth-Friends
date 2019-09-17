import React, { useState, useEffect } from "react";
import "../App.css";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import FriendsList from "./FriendsList";

const Friends = props => {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    axiosWithAuth()
      .get("/friends")
      .then(res => {
        console.log(res.data);
        setFriends(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="friends">
      <h1>Welcome to the Friends area!</h1>
      <FriendsList friends={friends} />
    </div>
  );
};

export default Friends;
