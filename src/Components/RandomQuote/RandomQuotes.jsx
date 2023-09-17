import React, { useState } from "react";
import './RandomQuotes.css'
import reload_icon from '../Assets/reload.png'


const RandomQuote = () => {
 
    const [quote,setQuote] = useState({
        text: "Throughout Heaven and Earth, I alone am honored.",
        author: "Gojo Satoru",
    });
  
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