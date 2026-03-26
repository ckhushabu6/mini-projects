import React from 'react'

function Card({item , type}) {
  return (
    <div style={{
        border : "1px solid #ddd",
        padding: "15px",
        borderRadius : "10px"
    }}>
        {type === "users" && <h3>{item.name}</h3>}
        {type === "posts" && <h3>{item.title}</h3>}
        {type === "albums" && <h3>{item.title}</h3>}
    </div>
  )
}

export default Card