import React from 'react'
import Card from './Card'

function CardGrid({ data, type }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px"
      }}
    >
      {data.map((ele) => (
        <Card key={ele.id} item={ele} type={type} />
      ))}
    </div>
  )
}

export default CardGrid