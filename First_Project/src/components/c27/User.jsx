import React, { useEffect } from "react";
import { useState } from "react";
import { getUsers } from "./User.js";

function User() {
  var [user, setUser] = useState([]);

  useEffect(() => {
    getUsers(setUser);
  }, []);
  return (
    <div style={{ padding: 50 }}>
      <h2>Ramdom User Information</h2>

      <section>
        <table className="table table-striped table-bordered table-hover">
          <thead >
            <th>IMAGE</th>
            <th>NAME</th>
            <th>GENDER</th>
            <th>AGE</th>
            <th>EMAIL</th>
          </thead>
          <tbody>
            {user.map(function (ele) {
              return (
                <tr>
                  <td>
                    <img src={ele.picture.large} alt="" />
                  </td>
                  <td>{ele.name.first}</td>
                  <td>{ele.gender}</td>
                  <td>{ele.dob.age}</td>
                  <td>{ele.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default User;
