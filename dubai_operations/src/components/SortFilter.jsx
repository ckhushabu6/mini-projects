import React from 'react'

function SortFilter({sortOrder , setSortOrderr , filter , setFilter , type}) {
  return (
    <div>
        <button onClick={()=>setSortOrderr("asc")}>A-Z</button>
        <button onClick={()=>setSortOrderr("desc")}> Z-A </button>
        {type === "users" && (
            <input
            placeholder='Filter by city'
            onChange={(e)=>setFilter(e.target.value)}
            />
        )}

        {(type === "posts" ||  type === "albums") && (
            <input
            placeholder='Filter by userId'
            onChange={(e)=> setFilter(e.target.value)}
            />
        )}
    </div>
  )
}

export default SortFilter