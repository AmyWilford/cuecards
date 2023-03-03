// // Import required components and dependencies
// import React from "react";
// import { NavLink } from "react-router-dom";
// import styled from "styled-components";

// const StyledNav = styled.nav`
//   background-color: #ff7134;
//   color: white;
// `;

// export default function Footer() {
//   // const navigate = useNavigate();

//   // const routeChangeAllQuestions = () => {
//   //   let path = `/allcards`;
//   //   navigate(path);
//   // };
//   // const routeChangeStudy = () => {
//   //   let path = `/study`;
//   //   navigate(path);
//   // };

//   // const routeChangeAdd = () => {
//   //   let path = `/api/study`;
//   //   navigate(path);
//   // };
//   return (
//     <StyledNav className="navbar fixed-bottom footer justify-content-end">
//       <div className="d-flex m-2 ">
//         <NavLink
//           to="/study"
//           className={({ isActive }) =>
//             isActive ? "nav-link active" : "nav-link inactive"
//           }
//         >
//           study
//           {/* <button
//             className="btn btn-link nav-link m-1"
//             type="submit"
//             onClick={routeChangeStudy}
//           >
//             study
//           </button> */}
//         </NavLink>
//         <NavLink
//           to="/allcards"
//           className={({ isActive }) =>
//             isActive ? "nav-link active" : "nav-link inactive"
//           }
//         >
//           view all cards
//           {/* <button
//             className="btn btn-link nav-link m-1"
//             type="submit"
//             onClick={routeChangeAllQuestions}
//           >
//             view all cards
//           </button> */}
//         </NavLink>
//         <NavLink
//           to="/api/study"
//           className={({ isActive }) =>
//             isActive ? "nav-link active" : "nav-link inactive"
//           }
//           id="add-new"
//         >
//           +
//           {/* <button
//             className="btn btn-link nav-link m-1"
//             type="submit"
//             onClick={routeChangeAdd}
//           >
//             +
//           </button> */}
//         </NavLink>
//       </div>
//     </StyledNav>
//   );
// }
