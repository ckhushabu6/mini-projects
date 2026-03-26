import React from 'react'

function SearchBar({search , setSearch}) {
    
  return (
    <div>
        <input 
        type="text"
        placeholder='Search...'
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        style={{padding: "8px" , width: "200px"}}
        />
    </div>
  )
}

export default SearchBar