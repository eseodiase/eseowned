import React from 'react';
import {useState} from 'react';
import axios from 'axios';

function Home(){
    const [quote, setQuote] = useState('')
    const getQuote = () =>{
        axios.get('https://api.quotable.io/radom').then (res =>{
            console.log(res.data.content)
            setQuote(res.data.content)
        }).catch (err =>{
            console.log(err)
        })
    }
    
    return(
    <div className="App">
    <button onClick={getQuote}> Get Quote </button>
    (quote && <p>{quote}</p> )
    </div>
    )
}

export default Home;
