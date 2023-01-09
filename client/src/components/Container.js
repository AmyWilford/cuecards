// import React, { useState } from "react";
// // import Header from "./Header";
// // import Footer from "./Footer";
// import Home from "./pages/Home";
// import Study from './Question';
// import AllQuestions from "./AllQuestions";
// import AddQuestion from "./AddQuestion";
// import Update from "./Update";

// export default function Container() {

//   const [currentPage, setCurrentPage] = useState("Home");

//   const renderPage = () => {
//     if (currentPage === "Home") {
//       return (
//         <Home currentPage={currentPage} handlePageChange={handlePageChange} />
//       );
//     }
//     if (currentPage === "Study") {
//       return <Study />;
//     }
//     if (currentPage === "AllQuestions") {
//       return <AllQuestions />;
//     }
//     if (currentPage === "AddQuestion") {
//       return <AddQuestion />;
//     }
//     // return <Update />;
//   };

//   const handlePageChange = (page) => setCurrentPage(page);

//   return (
//     <div>
//       <Header currentPage={currentPage} handlePageChange={handlePageChange} />
//       {renderPage()}
//       <Footer />
//     </div>
//   );
// }
