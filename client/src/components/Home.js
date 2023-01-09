import React from "react";
// import { useNavigate } from "react-router-dom";
// import styled from "styled-components";
import lightbulb from "../assets/lightbulb.png";

export default function Home() {
  // let navigate = useNavigate();
  // const routeChangeStudy = () => {
  //   let path = `/study`;
  //   navigate(path);
  // };

  return (
    <div className="row d-flex flex-column align-content-center mt-5">
      <div className="my-5">
        <img src={lightbulb} alt="lighbulb graphic"></img>
      </div>

      {/* <button className="btn custom-button m-2" onClick={routeChangeStudy}>
        start studying
      </button> */}
     
    </div>
  );
}
