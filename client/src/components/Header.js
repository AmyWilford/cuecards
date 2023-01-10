// Import required components and dependencies
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components"

export default function Header() {

  const navigate = useNavigate();

  const routeChangeStudy = () => {
    let path = `/study`;
    navigate(path);
  };
  // Function to show different nav elements based on login status
  return (
    <div className="header fixed-top pt-3 bg-white d-flex justify-content-end">
      <nav className="navbar">
          <div>
          <ul className="navbar-nav nav-options">
            <li className="nav-item">
            <button
            className="btn btn-link nav-link m-1"
            type="submit"
            onClick={routeChangeStudy}
          >
          start studying
          </button>
            </li>
          </ul>
          </div>
      </nav>
    </div>
  );
}
