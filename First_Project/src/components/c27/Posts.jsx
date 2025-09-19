import React from "react";
import { getPosts } from "./Posts";
import { useState } from "react";

function Posts() {
  var [user, setUser] = useState([]);

  return (
    <div style={{ padding: 50 }}>
      <h2 style={{ marginBottom: 30 }}>Posts Information</h2>
      <button
        onClick={() => {
          getPosts(setUser);
        }}
      >
        Get Postd
      </button>

      <div>
        <ol>
          {user.map(function (post) {
            return <li>{post.title}</li>;
          })}
        </ol>
      </div>
    </div>
  );
}

export default Posts;
