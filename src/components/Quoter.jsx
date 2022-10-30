import React from 'react'
import { FiTwitter } from 'react-icons/fi';
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";


const Quoter = () => {

  const [qquote, setQuote] = React.useState({
    quote: "something idk",
    author: "some dude"
  });

  const [count, setCount] = React.useState(0)



    
    React.useEffect(() => {
      fetch("https://api.quotable.io/random")
    .then(x => x.json())
    .then(({content, author}) => {
      setQuote({quote: content, author})
      
    })
    }, [count])
    //onClick={/*setCount(x => x + 1)*/}




  return (
    <div id="quote-box">
      <h1 id="text"><FaQuoteLeft /> {qquote.quote} <FaQuoteRight /></h1>
      <p id="author"> - {qquote.author}</p>
      <div class="btns">
        <div id="social-btns">
          <a class="btn" id="tweet-quote" target="_blank" href="https://twitter.com/intent/tweet"><FiTwitter /></a>
        </div>

        <button id="new-quote" onClick={x => setCount(y => y + 1)} class="btn">New Quote</button>
      </div>
    </div>
  )
}

export default Quoter