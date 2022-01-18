import React , { useState } from 'react'

const MovieListHeading = ({setSearchValue , heading , hasSearch}) => {
    const [search , setSearch] = useState("avengers")
    const handler=(e)=> {
        e.preventDefault();
        setSearchValue(search);
    }
    return (
        <div className='d-flex align-items-center'>
            <div className='col'>
                <h1>{heading}</h1>
            </div>
            {hasSearch ? <form onSubmit={handler} className="form-inline search-input">
                <input onChange={({target})=>setSearch(target.value)} value={search} className="form-control mr-sm-2"
                type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
            </form>: ""}
        </div>
    )
}

export default MovieListHeading
