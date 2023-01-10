// Import required components and dependencies
import React from "react";
// import { Link } from "react-router-dom";

export default function Footer() {
  // Function to show different nav elements based on login status

  return (
    <nav className="navbar fixed-bottom footer justify-content-end bg-white">
      <div className="d-flex m-2 ">
        <a
          href="/"
          // onClick={() => handlePageChange("AllQuestions")}
          // className={
          //   currentPage === "Home"
          //     ? " nav-link active pl-3"
          //     : " nav-link pl-3"
          // }
        >
          view all study cards
        </a>
        <a href="/api/study">+</a>
      </div>
    </nav>
  );
}
