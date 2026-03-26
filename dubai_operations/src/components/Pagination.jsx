import React from 'react'

function Pagination({page , setPage , totalPage}) {
  return (
    <div style={{margin:"20px"}}>
        <button
        disabled={page === 1}
        onClick={()=> setPage(p => p -1)}
        >Prev</button> 
        <span style={{margin : "0 10px"}}>
            Page {page}/{totalPage}
        </span>
        <button disabled={page === totalPage} onClick={()=>setPage => p + 1}>
            Next
        </button>
    </div>
  )
}

export default Pagination