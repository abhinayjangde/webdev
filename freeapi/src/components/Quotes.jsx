import axios from "axios"
import { useEffect, useState } from "react"
import QuoteCard from "./QuoteCard"
import RandomQuote from "./RandomQuote"

export default function Quotes() {

    const [allQuotes, setAllQuotes] = useState([])
    const [randomQuote, setRandomQuote] = useState()
    const [searchInput, setSearchInput] = useState("")
    const [filteredQuotes, setFIlteredQuotes] = useState([])

    async function getAllQuotes() {
        const { data } = await axios.get("https://api.freeapi.app/api/v1/public/quotes")
        setAllQuotes(data.data.data)
    }
    async function getRandomQuote() {
        const { data } = await axios.get("https://api.freeapi.app/api/v1/public/quotes/quote/random")
        setRandomQuote(data.data)
    }

    useEffect(() => {
        // fetching all quotes
        getAllQuotes()
    }, [])


    return (
        <div className="container">
            <h1 className="quote-header">Here are our latest quotes.</h1>

            <input onChange={(e) => {
                const inputValue = e.target.value
                setSearchInput(inputValue)
                console.log(inputValue)
                let filteredQuotes = allQuotes.filter(({ content }) => 
                    content.toLowerCase().includes(inputValue.toLowerCase())
                )
                setFIlteredQuotes(filteredQuotes)

            }}

                value={searchInput}
                className="search-quote"
                type="text"
                placeholder="search quotes..."
            />

            {
                filteredQuotes.length > 0 ? <QuoteCard quotes={filteredQuotes} /> : <QuoteCard quotes={allQuotes} />
            }


            <h1 className="random-quote-header">Get random quote</h1>
            <div className="random-quote">
                <button onClick={getRandomQuote} className="random-btn" >generate randome quote</button>
                {
                    randomQuote && <RandomQuote quote={randomQuote} />
                }
            </div>

        </div>
    )

}