import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewQuestion({ allQuestions }) {
  //   const [newQuestion, setQuestion] = useState("");
  // console.log(allQuestions[0].question);
  //   return (
  //     // return (
  //     <div>
  //       <h1> this</h1>
  //       <div>{allQuestions}</div>
  //     </div>
  //   );
  // }

  return (
    <div>
      {allQuestions.map((question) => (
        <div>{question.question}</div>
      ))}
    </div>
  );
}
//   const [allQuestions, setAllQuestions] = useState([]);
//   // Set state for randomly generated question and answer
//   const [question, setQuestion] = useState("");
//   const [answer, setAnswer] = useState("");
//   const [displayClass, setdisplayClass] = useState("d-none");
//   let navigate = useNavigate();

//   // Establish navigation route for study break button
//   const routeChange = () => {
//     let path = `/`;
//     navigate(path);
//   };

//   // Function to get question from the database (using imported getQuestions from utils)
//   const getTheQuestions = async () => {
//     try {
//       const response = await getQuestions();
//       if (!response.ok) {
//         throw new Error("could not fetch your questions");
//       }
//       let data = await response.json();
//       // This will hold all questions from the database
//       setAllQuestions(data);
//       console.log(allQuestions)
//       setQuestion(
//         allQuestions[Math.floor(Math.random() * allQuestions.length)]
//       );
//       setdisplayClass("d-block");
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   // From the list of all questions, get
//   // const getQuestion = async () => {
//   //   console.log(allQuestions);
//   //   setQuestion(allQuestions[Math.floor(Math.random() * allQuestions.length)]);
//   //   let questionId = question._id;
//   //   console.log(questionId);
//   //   // setAnswer(question.answer);
//   //   // setdisplayClass("d-block");
//   //   // return question;
//   // };

//   // Get answer
//   const getAnswer = (event) => {
//     setdisplayClass("d-block");
//     // setAnswer(question.answer);
//   };

//   // Get a new question on new question button press
//   const newQuestion = () => {
//     setQuestion("");
//     setAnswer("");
//     setQuestion(allQuestions[Math.floor(Math.random() * allQuestions.length)]);
//   };
//   // UseEffect to get all questions on initial page load
//   useEffect(() => {
//     getTheQuestions();
//   }, []);

//   return (
//     <div className="container mt-5">
//       <div className="mb-3 d-flex justify-content-end">
//         <button className="btn" onClick={routeChange}>
//           study break
//         </button>
//       </div>

//       <div>
//         <StyledCard>
//           <div className="row p-2">
//             <div className="col-sm-6 custom-alignment">
//               <div className={displayClass}>
//                 <StyledButton
//                   className="btn m-2 custom-shadow"
//                   id="answerbtn"
//                   onClick={getAnswer}
//                 >
//                   Answer
//                 </StyledButton>
//               </div>
//             </div>

//             <div className="col-sm-6 text-right">
//               <div className={displayClass}>
//                 <StyledButton
//                   className="btn m-2 custom-shadow"
//                   id="newQbtn"
//                   onClick={newQuestion}
//                 >
//                   New Question
//                 </StyledButton>
//               </div>
//             </div>
//           </div>

//           <div className=" p-5">
//             <p className="font-weight-bold">
//               {/* QUESTION: <span id="question">{question.question}</span> */}
//             </p>
//             <hr></hr>
//             <p className="font-italic">{answer}</p>
//           </div>
//         </StyledCard>
//       </div>
//     </div>
//   );
