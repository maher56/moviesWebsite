import React , { useState , useEffect } from 'react'
import './App.css'
import axios from 'axios';
import MovieList from './Components/MovieList';
import MovieListHeading from './Components/MovieListHeading';

export const Context = React.createContext(); 
const App=()=>{
    const [movies , setMovies] = useState([])
    const [favourites , setFavourites] = useState([])
    const [searchValue , setSearchValue] = useState("avengers")
    useEffect(()=> {
        axios.get(`http://www.omdbapi.com/?s=${searchValue}&apikey=cd932632`)
        .then(res=> {
            let info = res.data.Search.filter(ele=> ele.Type === "movie");
            setMovies(info)
            console.log(info)
        })
        .catch(error=>console.log(error))
    } , [searchValue])

    function handleAdding(movie , adding) {
        if(adding && !favourites.includes(movie))
            setFavourites([...favourites , movie]);
        else if(!adding && favourites.includes(movie))
            setFavourites(favourites.filter(e=>e.Title!==movie.Title))
    }

    return (
    <div className='container-fluid'>
        <MovieListHeading setSearchValue={setSearchValue} hasSearch={true} heading="Movies"/>
        <div className='d-flex movie-app'>
            <MovieList movies={movies} handleAdding={handleAdding} adding={true}/>
        </div>
        <MovieListHeading hasSearch={false} heading="Favourites"/>
        <div className='d-flex movie-app'>
            <MovieList movies={favourites} handleAdding={handleAdding} adding={false}/>
        </div>
    </div>
    );
}

export default App;
