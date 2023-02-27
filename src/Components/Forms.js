import React, { useState } from "react";

const Forms = () => {
    const [name, setName] = useState('')
    const [headingText, setHeading] = useState('')

    const handleChange = (event) => {
       setName(event.target.value)
    }
    const handleClick = () => {
        setHeading(name)
    }
    return(
        <div>
         <h1>Hello {headingText}</h1>
         <input
         onChange={handleChange}
          type="text"placeholder="What is your name?"
            />
         <button onClick={handleClick}>Submit:</button>
        </div>
    )
}

export default Forms;