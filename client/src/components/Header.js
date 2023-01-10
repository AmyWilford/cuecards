// Import required components and dependencies
import React from "react";
import lightbulb from "../assets/lightbulb.png";
import styled from "styled-components";



export default function Header() {


  
  // Function to show different nav elements based on login status

  return (
    <div className="header fixed-top pt-3 bg-white d-flex justify-content-end">
      <nav className="navbar">
          <div>
          <ul className="navbar-nav nav-options">
            <li className="nav-item">
            <a
              href="/study"
              className="nav-link"
            >
              start studying
            </a>
            </li>
          </ul>
          </div>
      </nav>
    </div>
  );
}
