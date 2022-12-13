import React from "react";
import { useNavigate } from "react-router-dom";


export default function Home() {

    let navigate = useNavigate();
  const routeChange = () => {
    let path = `/study`;
    navigate(path);
  };

    return (
        <div>
            <button onClick = {routeChange}>Start Studying</button>
        </div>
    )
}