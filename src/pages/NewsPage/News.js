import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NewsCard from '../../components/NewsCard'
import Spinner from 'react-bootstrap/Spinner'
import './news-style.css'

const News = () => {
    const [state, setState] = useState(null)

    useEffect(() => {
        const abortController = new AbortController()

        axios({
            "method":"GET",
            "url":"https://bing-news-search1.p.rapidapi.com/news/search",
            "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"bing-news-search1.p.rapidapi.com",
            "x-rapidapi-key":"bff6c04355msh46e32c3afb8d323p1eaeedjsnbf048a37783e",
            "x-bingapis-sdk":"true",
            "useQueryString":true
            },"params":{
            "freshness":"Day",
            "textFormat":"Raw",
            "safeSearch":"Off",
            "q":"blacklivesmatter"
            }
            })
            .then((response)=>{
              // console.log(response.data.value)
              setState(response.data.value)
            })
            .catch((error)=>{
              console.log(error)
            })

        return () => { abortController.abort() }
    }, [])
    const cards = state ? state.map((value, index) => <NewsCard key={index} title={value.name} urlToImage={value.image.thumbnail.contentUrl} content={value.description} url={value.url} />) : <Spinner animation="border" variant="primary" size="sm" >  <span className="sr-only">Loading...</span>
    </Spinner>

    return (
        <>
            <div className="header">
                <h1 className="heading">Latest News</h1>
            </div>
            <div className="cards-div">
                {cards}
            </div>
        </>
    )
}

export default News
