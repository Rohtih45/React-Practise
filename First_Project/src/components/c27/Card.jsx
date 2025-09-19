import React, { useEffect, useState } from "react";
import { getPosts } from "./Posts";

function Card() {
  var [user, setUser] = useState([]);

  useEffect(() => {
    getPosts(setUser);
  }, [user]);
  return (
    <div style={{ padding: 50 }}>
      <div style={{ display: "flex",gap:'20px',flexWrap:'wrap', height: "300px", width: "505px" }}>
        {user.map(function (post) {
          return (
            <div
              style={{
                border: "2px solid black",
                margin: "20px",
              }}
            >
              <h3>{post.userId}</h3>
              <p>{post.title}</p>
              <p>{post.body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Card;
