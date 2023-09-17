import React, { useState } from "react";
import './RandomQuotes.css'
const RandomQuote = () => {
  return (
   
    const [quote, setQuote] = useState({
        text: "Throughout Heaven and Earth, I alone am honored",
        author: "Gojo Satoru",
    });
   
   <div className='container'>
     <div className="quote">{quote.text}</div>
     <div>
        <div className="line"></div>
        <div className="bottom">
            <div className="author">{quote.author}</div>
        </div>
     </div>
    </div>
  ) 
     
}

export default RandomQuote ;