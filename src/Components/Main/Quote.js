import "./Quote.css";

const Quote = (props) => {
  
  return (
    <div className="quote">
      <p>{props.quoteObj.quote}</p>
      <p>{props.quoteObj.author}</p>
      
    </div>
  );
};

export default Quote;
