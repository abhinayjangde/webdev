
export default function RandomQuote({quote}){

    return (
        <div className="quote-card">
            <h4 className="quote-content">{quote.content}</h4>
            <p className="quote-author" >{quote.author}</p>
        </div>
    )
}