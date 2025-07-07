

export default function QuoteCard({ quotes }) {
    return (
        <div className="quote-container">
            {quotes.map(({author, content, id}) => (
                <div key={id} className="quote-card">
                    <h4 className="quote-content">{content}</h4>
                    <p className="quote-author" >{author}</p>
                </div>
            ))}
        </div>
    )
}