import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import lightbulb from "../assets/lightbulb.png";

// const StyledDiv = styled.div`
//   margin-top: 50vh;

// `
const StyledButton = styled.button`
  background-color: #ff7134;
  color: #fff1e1;
  border: none;
  margin: 0 5rem 0 5rem;
`;

export default function Home() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/study`;
    navigate(path);
  };

  return (
    <div className="row d-flex flex-column align-content-center mt-5">
      <div className="m-5">
        <img src={lightbulb} alt="lighbulb graphic"></img>
      </div>

      <StyledButton className="btn" onClick={routeChange}>
        start studying
      </StyledButton>
    </div>
  );
}
