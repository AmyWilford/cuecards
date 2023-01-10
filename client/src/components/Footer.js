// Import required components and dependencies
import React from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

export default function Footer() {
  const navigate = useNavigate();

  const routeChangeAllQuestions = () => {
    let path = `/`;
    navigate(path);
  };

  const routeChangeAdd = () => {
    let path = `/api/study`;
    navigate(path);
  };
  return (
    <nav className="navbar fixed-bottom footer justify-content-end bg-white">
      <div className="d-flex m-2 ">
      <button
            className="btn btn-link nav-link m-1"
            type="submit"
            onClick={routeChangeAllQuestions}
          >
          all study cards
          </button>
          <button
            className="btn btn-link nav-link m-1"
            type="submit"
            onClick={routeChangeAdd}
          >
          +
          </button>
      </div>
    </nav>
  );
}
