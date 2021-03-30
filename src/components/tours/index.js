import React, { useState, useEffect } from 'react'
import Tours from './Tours'
import './style.css'
const API = 'https://course-api.com/react-tours-project'

export default function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTours = async () => {
    setLoading(true)
    try {
      const res = await fetch(API);
      const tours = await res.json()
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }
  const removeTour = id => {
    const newTours = tours.filter(tour => tour.id !== id)
    setTours(newTours)
  }
  useEffect(() => {
    fetchTours();
  }, []);
  if (loading) {
    return (
      <main>
        <h1>Loading ...</h1>
      </main>
    )
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={() => fetchTours()}>
            refresh
          </button>
        </div>
      </main>
    )
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  )
}
