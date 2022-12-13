import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledButton = styled.button`
background-color: #FF7134;
color: #FFF1E1;
border: none;
margin-top: 50%;
font-size: 2rem;

`

export default function Home() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/study`;
    navigate(path);
  };

  return (
    <div className="row d-flex justify-content-center">
        <StyledButton className="btn" onClick={routeChange}>
          let's study
        </StyledButton>
    </div>
  );
}
