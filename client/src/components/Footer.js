// Import required components and dependencies
import React from "react";
// import { Link } from "react-router-dom";

export default function Footer({ currentPage, handlePageChange }) {

  // Function to show different nav elements based on login status

  return (
    <nav className="header">
      <div className="pl-2 font-weight-bold">
        <a
          href="/allquestions"
          onClick={() => handlePageChange("AllQuestions")}
          className={
            currentPage === "Home"
              ? " nav-link active my-brand"
              : " nav-link my-brand"
          }
        >
         view all study cards
        </a>
      </div>
      <div>
        <ul className="nav-options">
          <li>
            <a
              href="/api/study"
              onClick={() => handlePageChange("AddQuestion")}
              className={
                currentPage === "AddQuestion"
                  ? "nav-link active pl-3"
                  : "nav-link pl-3"
              }
            >
              +
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

