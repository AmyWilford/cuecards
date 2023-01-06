import React, { useEffect,useState } from "react";
import { useParams, useNavigate } from "react-router";
import { getSingleQuestion } from "../utils/API";

export default function NewUpdate(props) {
const [question, setQuestion] = useState("");

const [form, setForm] = useState({
    question: "",
    answer: "",
  });

  const params = useParams();
  const navigate = useNavigate();
  const id = params.id.toString();
  console.log(id);

const getQuestionToEdit = async () => {
try {
    const response = await getSingleQuestion(id);
    if(!response.ok) {
        throw new Error('could not get question ')
    }
    let data = await response.json();
    setForm(data);
    console.log(form.question);
    console.log(form.answer);
    console.log(data);
} catch(err) {
    console.error(err);
}
}
useEffect(() => {
    getQuestionToEdit();
  }, []);

//   useEffect(()=> {
//     async function getSingleQuestion(id) {
//         const response = await fetch(`/api/study/${id}`);

//         if(!response.ok) {
//             const message = `An error has occured: ${response.statusText}`;
//             console.log(message);
//             return;
//         }
//         const record = await response.json();
//         if (!record) {
//             console.log (`Record with id ${id} not found`);
//             navigate('/allquestions');
//             return;
//         }
//         setForm(record);
//     }
//     getSingleQuestion();
//     return;

//   });

//   function updateForm(value) {
//     return setForm((prev) => {
//       return { ...prev, ...value };
//     });
//   }


// const getQuestion = async() => {
//     try {
//         const response = await getSingleQuestion(props.questionId);
//         console.log(props.questionId)
//         if (!response.ok) {
//             console.log(response);
//           throw new Error("could not fetch your questions");
//         }
//         let data = await response.json();
//         setQuestion(data);
//         console.log(question);
        
//       } catch (err) {
//         console.error(err);
//       }
// }


    return(
        <div>
            <h1>Hello</h1>
            <p>I am newupdate</p>
            <p>{form.question}</p>
            <p>{form.answer}</p>
        </div>
    )
}