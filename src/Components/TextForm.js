import React, { useState } from 'react';

export default function TextForm() {

    const [text, setText] = useState('Enter The Text Here');

    const UpCase = () => {
        setText(text.toUpperCase()); 
    }

    let NoOfChar = (text) => {

        let c = 0;
        text.forEach(ch => {
            if(ch !== ' '){
                c++
            }
        });

        return c;
    }

    return (
        <>
            <h1>Enter the Text Below</h1>
            <div className='mb-1'>
                <label htmlFor="box" className='form-label'></label>
                <textarea className='form-control' name="text" id="text" value={text} cols="15" rows="10" onChange={(e)=>setText(e.target.value)}></textarea>
            </div>

            <button className="btn btn-primary" onClick={UpCase}>Convert UpperCase</button>
            <div className="container">
                <h1>Your Text Summary</h1>
                <span><h2>Number of Characters - </h2> {text.length} </span>
                <p>{text}</p>
            </div>
        
        </>
    );
}


