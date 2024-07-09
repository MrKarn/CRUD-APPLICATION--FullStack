import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./ViewUser.css"; // Import the CSS file for styling

export default function ViewUser() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8090/user/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container view-user-container">
      <div className="row justify-content-center">
        <div className="col-md-8 border rounded p-5 mt-3 shadow-lg view-user-box">
          <h2 className="text-center mb-4">User Details</h2>

          <div className="card user-card">
            <div className="card-header text-white bg-dark">
              Details of user id : {user.id}
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <b>Name:</b> {user.name}
              </li>
              <li className="list-group-item">
                <b>Username:</b> {user.username}
              </li>
              <li className="list-group-item">
                <b>Email:</b> {user.email}
              </li>
            </ul>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
