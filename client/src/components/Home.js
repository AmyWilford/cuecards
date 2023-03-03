import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import lightbulb from "../assets/lightbulb.png";

const StyledDivContainer = styled.div`
  border-radius: 50%;
  background-color: #d5edfa;
  padding: 1rem;
`;

const StyledSpan = styled.span`
  color: #ff7134;
  font-weight: bold;
  font-size: 1.8rem;
  display: flex;
  justify-content: center;
  background-image: linear-gradient(
    to right,
    #ffde59,
    #ff7134 50%,
    #ff7134 50%
  );
  background-size: 200% 100%;
  background-position: -100%;
  padding: 5px 0;
  position: relative;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-position: 0;
    cursor: pointer;
  }
  &:hover::before {
    width: 100%;
  }
`;
export default function Home() {
  let navigate = useNavigate();
  const routeChangeStudy = () => {
    let path = `/study`;
    navigate(path);
  };

  return (
    <div className="row d-flex flex-column align-content-center mt-5">
      <StyledDivContainer className="my-5">
        <img src={lightbulb} alt="lighbulb graphic"></img>
      </StyledDivContainer>

      <StyledSpan onClick={routeChangeStudy}>start studying ➡</StyledSpan>
    </div>
  );
}
