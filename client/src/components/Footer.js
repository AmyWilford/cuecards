// Import required components and dependencies
import React from "react";
import styled from "styled-components";

export default function Footer() {
  // Function to show different nav elements based on login status

  return (
    <nav className="navbar fixed-bottom footer justify-content-end bg-white">
      <div className="d-flex m-2 ">
        <a
          href="/"
          className="nav-link"

          // onClick={() => handlePageChange("AllQuestions")}
          // className={
          //   currentPage === "Home"
          //     ? " nav-link active pl-3"
          //     : " nav-link pl-3"
          // }
        >
          view all cards
        </a>
        <a href="/api/study" className="nav-link custom-icon">
          +
        </a>
      </div>
    </nav>
  );
}
