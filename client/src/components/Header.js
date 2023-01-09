// Import required components and dependencies
import React from "react";
import lightbulb from "../assets/lightbulb.png";
import styled from "styled-components";

const StyledImg = styled.img`
  width: 25px;
`;

export default function Header({ currentPage, handlePageChange }) {
  // Function to show different nav elements based on login status

  return (
    <nav className="header mt-3 fixed-top">
      <div className="pl-2 font-weight-bold nav-options d-flex justify-content-between">
        <div>
          <a
            href="/"
            onClick={() => handlePageChange("Home")}
            className={
              currentPage === "Home"
                ? " nav-link active my-brand"
                : " nav-link my-brand"
            }
          >
            <StyledImg src={lightbulb} alt="lightbulb-logo"></StyledImg>
          </a>
        </div>
        <div>
          <a
            href="/study"
            onClick={() => handlePageChange("Study")}
            className={
              currentPage === "Study" ? "nav-link active pl-3" : "nav-link pl-3"
            }
          >
            Study
          </a>
        </div>
      </div>
    </nav>
  );
}
