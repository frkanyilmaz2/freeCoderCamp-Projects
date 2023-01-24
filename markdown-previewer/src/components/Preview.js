import { marked, Renderer } from 'marked'
import React from 'react'
import './Preview.css'
import highlight from 'highlight.js'

export const Preview = ({input}) =>  {
const renderer = new marked.Renderer();
    function createMarkup() {
        const rawInput = marked.parse(input, {
        
          breaks: true,
        })
        return {__html: rawInput, renderer:renderer};
      }
      
    return(
        <div className='preview-container' id="preview-cont">
            <label id="preview-label" for="preview"><i className="fa-brands fa-free-code-camp"></i> Preview</label>
            <div className='previewer' id='preview'  dangerouslySetInnerHTML={createMarkup()}/>
        </div>
    );
}