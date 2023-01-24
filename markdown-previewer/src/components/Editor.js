import { marked } from 'marked'
import React, { useEffect } from 'react'
import './Editor.css'


export const Editor = ({input,setInput}) =>  {

    const handleChange=(e)=>{
       setInput(e.target.value);
    }

    return(
        <div className='text-container'>
            <label id="editor-label" htmlFor="editor"><i className="fa-brands fa-free-code-camp"></i> Editor</label>
            <textarea id='editor' name='editor' onChange={handleChange} value={input}></textarea>
        </div>
    );
}