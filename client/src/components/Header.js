// Import required components and dependencies
import React from "react";
// import { Link } from "react-router-dom";

export default function Header({ currentPage, handlePageChange }) {

  // Function to show different nav elements based on login status

  return (
    <nav className="header">
      <div className="pl-2 font-weight-bold">
        <a
          href="/"
          onClick={() => handlePageChange("Home")}
          className={
            currentPage === "Home"
              ? " nav-link active my-brand"
              : " nav-link my-brand"
          }
        >
          |aw|
        </a>
      </div>
      <div>
        <ul className="nav-options">
          <li>
            <a
              href="/study"
              onClick={() => handlePageChange("Study")}
              className={
                currentPage === "Study"
                  ? "nav-link active pl-3"
                  : "nav-link pl-3"
              }
            >
              Study
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

