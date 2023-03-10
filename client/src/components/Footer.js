// Import required components and dependencies
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
  background-color: #ff7134;
  color: white;
`;

export default function Footer() {
  return (
    <StyledNav className="navbar fixed-bottom footer justify-content-end">
      <div className="d-flex m-2 ">
        <NavLink
          to="/study"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link inactive"
          }
        >
          study
        </NavLink>
        <NavLink
          to="/allcards"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link inactive"
          }
        >
          view all cards
        </NavLink>
        <NavLink
          to="/api/study"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link inactive"
          }
          id="add-new"
        >
          +
        </NavLink>
      </div>
    </StyledNav>
  );
}
