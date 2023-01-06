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

const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
    console.log(form.question);
    console.log(form.answer);
  };


  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const response = { ...form };
    console.log(response);
    await fetch(`/api/study/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(response),
    }).catch((err) => {
      console.log(err);
      return;
    });
    navigate("/allquestions");
  };

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

            <form onSubmit={handleFormSubmit} autoComplete="off">
                {/* <div className="form-row">
                  <div className="form-group col-md-8">
                    <input
                      type="hidden"
                      className="form-control"
                      name="questionId"
                      id="inputFirstName"
                      value={formState.questionId}
                    />
                  </div>
                </div> */}
                <div className="form-row">
                  <div className="form-group col-md-8">
                    <label htmlFor="questionInput">Question</label>
                    <input
                      type="text"
                      id="questionInput"
                      className="form-control"
                      name="question"
                      value={form.question}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-8">
                    <label htmlFor="answerInput">Answer</label>
                    <input
                      type="text"
                      className="form-control"
                      name="answer"
                      id="answerInput"
                      value={form.answer}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">
                  Save changes
                </button>
              </form>
        </div>
    )
}