import React from 'react'
import axios from 'axios'
import env from "react-dotenv";
const Main = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const url = `http://www.omdbapi.com/?t=d&apikey=${API_KEY}`

  const getMovies = async() => {
    try {
     const {data} = await axios.get(url)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  getMovies()
  return (
    <div>Main</div>
  )
}

export default Main