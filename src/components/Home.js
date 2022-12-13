import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #ff7134;
  color: #fff1e1;
  border: none;
  margin-top: 50%;
  font-size: 2rem;
  font-family: "Bellota Text", cursive;
`;

export default function Home() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/study`;
    navigate(path);
  };

  return (
    <div className="row d-flex justify-content-center">
      <StyledButton className="btn" onClick={routeChange}>
        study time
      </StyledButton>
    </div>
  );
}
