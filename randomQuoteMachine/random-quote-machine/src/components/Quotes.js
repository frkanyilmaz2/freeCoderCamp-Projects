import React,{useEffect, useState} from 'react'
import axios from 'axios';
import colors from './Colors'

export const Quotes = () => {

    const [quotes,setQuotes] = useState([{text:'',author:''}]);
    const [randomNumber,setRandomNumber] = useState(0);

    
    useEffect(()=>{
        getNewQuote();
    },[]
    )
    
    const getNewQuote = async () => {
        console.log(randomNumber)
        setRandomNumber(Math.floor(Math.random() *100));
        document.body.style.backgroundColor = colors[randomNumber];
        const response = await axios.get(`https://api.quotable.io/random`);
        setQuotes({text:response.data.content,author:response.data.author});
        console.log(randomNumber)
      };


    return (
        <div className='quote-box' id='quote-box' ><p className='text' id='text' style={{color:`${colors[randomNumber]}`}}><i style={{color:`${colors[randomNumber]}`}} className="fa-solid fa-quote-left"></i>{[quotes.text]}</p>
            <p className='author' id='author' ><small style={{color:`${colors[randomNumber]}`}}>-{quotes.author}</small></p>
            <div className='buttons'>
                <button className='new-quote' id='new-quote' style={{backgroundColor:`${colors[randomNumber]}`}} onClick={getNewQuote}>New Quote</button>
                <a className='twitter' id="tweet-quote" style={{backgroundColor:`${colors[randomNumber]}`}} href="https://twitter.com/intent/tweet" target="_blank" rel="noreferrer"><i className="fa-brands fa-twitter"></i></a>
                <a className='github' style={{backgroundColor:`${colors[randomNumber]}`}} href="https://github.com/frkanyilmaz2/freeCoderCamp-Projects" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a>
            </div>
        </div>

    );
}