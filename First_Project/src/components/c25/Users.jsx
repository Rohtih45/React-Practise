import React, { useEffect, useState } from "react";

function Users() {
  var [users, setUsers] = useState([]);

  const getUser = async () => {
    var res = await fetch("https://jsonplaceholder.typicode.com/users");
    var data = await res.json();
    setUsers(data);
  };
  useEffect(() => {
    getUser()
  });
  return (
    <div style={{ padding: 50 }}>
      <h2>Bahubali Movie</h2>
      <p>
        Baahubali: The Beginning is a 2015 Indian epic action film co-written
        and directed by S. S. Rajamouli, and produced by Shobu Yarlagadda and
        Prasad Devineni under Arka Media Works. Produced in the Telugu film
        industry,[16] the film was shot in both Telugu and Tamil
        languages.[17][18] It features Prabhas in a dual role alongside Rana
        Daggubati, Anushka, Tamannaah Bhatia, Ramya Krishnan, Sathyaraj, and
        Nassar. The first of a duology of films, it follows Sivudu, an
        adventurous young man who helps his love Avantika rescue Devasena, the
        former queen of Mahishmati who is now a prisoner under the tyrannical
        rule of king Bhallaladeva. The story concludes in Baahubali 2: The
        Conclusion (2017).
      </p>
      <button onClick={getUser}>User</button>
      {users.length > 0 ? (
        <ol>
          {users.map(function (ele) {
            return <li>{ele.name}</li>;
          })}
        </ol>
      ) : (
        <h3 style={{ color: "red" }}>No User Found</h3>
      )}
    </div>
  );
}

export default Users;
