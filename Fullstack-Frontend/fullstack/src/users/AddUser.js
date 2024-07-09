import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AddUser.css"; 

export default function AddUser() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { name, username, email } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8090/user", user);
    navigate("/");
  };

  return (
    <div className="container add-user-container">
      <div className="row justify-content-center">
        <div className="col-md-8 border rounded p-5 mt-3 shadow-lg add-user-box">
          <h2 className="text-center mb-4">Register User</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-4">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="Username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your username"
                name="username"
                value={username}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="Email" className="form-label">
                E-mail
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your e-mail address"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-primary me-3">
              Submit
            </button>
            <Link className="btn btn-secondary" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
