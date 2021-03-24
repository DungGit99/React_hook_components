import React, { useState, useEffect } from 'react'

export default function List({ getItems }) {
  const [items, setItems] = useState([])

  useEffect(() => {
    setItems(getItems())
    console.log('Updating Items')
  }, [getItems])

  return (
    <div>
      {items.map((item, idx) => (
        <div key={idx}>
          {item}
        </div>
      ))}
    </div>
  )
}
