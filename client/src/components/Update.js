import React, { useState } from "react";

export default function Update(props) {
  // const getSingleQuestion = async(_id) => {
  //     await fetch(`/api/study/${_id}`,
  //     {
  //         method: "POST",
  //         body: JSON
  //     });

  // }
  // const [formState, setFormState] = useState({
  //     question: `${question.question}`,
  //     answer: `${question.answer}`
  // })
  return <div>
    <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body"> {props.questionId} {props.question} {props.answer}
      
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
  </div>;
}
