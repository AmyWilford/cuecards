// Import required components and dependencies
import React from "react";
import lightbulb from "../assets/lightbulb.png";
import styled from "styled-components";

const StyledImg = styled.img`
  width: 25px;
`;

export default function Header() {
  // Function to show different nav elements based on login status

  return (
    <div className="header fixed-top pt-3 bg-white d-flex justify-content-end">
      <nav className="navbar">
        {/* <div className="pl-2 font-weight-bold nav-options d-flex justify-content-between"> */}
         
          <div>
          <ul className="navbar-nav">
            <li className="nav-item">
            <a
              href="/study"
              className="nav-link"
               
            >
              study
            </a>
            </li>
          </ul>
            
          </div>
        {/* </div> */}
      </nav>
    </div>
  );
}
