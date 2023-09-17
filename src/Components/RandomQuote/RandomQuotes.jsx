import React, { useState } from "react";
import './RandomQuotes.css'
import reload_icon from '../Assets/reload.png'


const RandomQuote = () => {
 
    let quotes = [];

    async function loadQuotes() {
        const response = await fetch("https://type.fit/api/quotes");
        quotes = await response.json();
    }
    
    const [quote,setQuote] = useState({
        text: "Throughout Heaven and Earth, I alone am honored.",
        author: "Gojo Satoru",
    });
    loadQuotes()

    return (
   
   
   <div className='container'>
     <div className="quote">{quote.text}</div>
     <div>
        <div className="line"></div>
        <div className="bottom">
            <div className="author">{quote.author}</div>
           <div className="icons">
            <img src={reload_icon} alt="" /></div> 
            
        </div>
     </div>
    </div>
  ) 
     
}

export default RandomQuote ;