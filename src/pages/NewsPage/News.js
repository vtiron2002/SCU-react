import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NewsCard from '../../components/NewsCard'
import Spinner from 'react-bootstrap/Spinner'
import './news-style.css'

const API_KEY = "722c05c77ee94c99bb4d8d5e18dedddc";
const News = () => {
    const [state, setState] = useState(null)

    useEffect(() => {
        const abortController = new AbortController()
        const signal = abortController.signal;

        let date = new Date();
        if (date.getDate() === 1) {
            console.log(true)
            date = new Date(date.getTime() - 86400000)
        }
        const today = date.getFullYear() + "-" + ("0" + (date.getMonth() + 1)).slice(-2) + "-" + ("0" + (date.getDate() - 1)).slice(-2)

        console.log(today)
        const url = `https://newsapi.org/v2/everything?q=blm&from=${today}&to=${today}&apiKey=${API_KEY}`;

        let result = null;
        axios.get(url, { signal: signal })
            .then(res => {
                setState(res.data.articles)
            }).catch(err => {
                console.log(err)
            })

        return () => { abortController.abort() }
    }, [])
    const cards = state ? state.map((article, index) => <NewsCard key={index} title={article.title} urlToImage={article.urlToImage} content={article.content} url={article.url} />) : <Spinner animation="border" variant="primary" size="sm" >  <span className="sr-only">Loading...</span>
    </Spinner>

    return (
        <>
            <div className="header">
                <h1 className="heading">Lates News Update on #BLACKLIVESMATTER</h1>
            </div>
            <div className="cards-div">
                {cards}
            </div>
        </>
    )
}

export default News