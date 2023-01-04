import React, { useState } from "react";

export default function Update() {

    const getSingleQuestion = async(_id) => {
        await fetch(`/api/study/${_id}`, 
        {
            method: "POST",
            body: JSON 
        });

        
    }
    // const [formState, setFormState] = useState({
    //     question: `${question.question}`,
    //     answer: `${question.answer}`
    // })
    return(
        <h1>Hello Updater</h1>
    )
}