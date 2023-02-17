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
  const routeChangeStudy = () => {
    let path = `/study`;
    navigate(path);
  };

  const routeChangeAdd = () => {
    let path = `/api/study`;
    navigate(path);
  };
  return (
    <nav className="navbar fixed-bottom footer justify-content-end custom-footer">
      <div className="d-flex m-2 ">
      <button
            className="btn btn-link nav-link m-1"
            type="submit"
            onClick={routeChangeStudy}
          >
          study
          </button>
      <button
            className="btn btn-link nav-link m-1"
            type="submit"
            onClick={routeChangeAllQuestions}
          >
          view all cards
          </button>
          <button
          id="add-new"
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
