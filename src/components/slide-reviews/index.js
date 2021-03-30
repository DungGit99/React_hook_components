import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import people from './data';
import './style.css';

export default function SlideReview() {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const prevPerson = () => {

  }
  const nextPerson = () => {

  }
  const randomPerson = () => {

  }
  return (
    <main>
      <section className='container'>
        <article className='review'>
          <div className='img-container'>
            <img src={image} alt={name} className='person-img' />
            <span className='quote-icon'><FaQuoteRight /></span>
          </div>
          <h4 className='author'>{name}</h4>
          <p className='job'>{job}</p>
          <p className='info'>{text}</p>
          <div className='button-container'>
            <button className='prev-btn' onClick={prevPerson}><FaChevronLeft /></button>
            <button className='next-btn' onClick={nextPerson}><FaChevronRight /></button>
          </div>
          <button className='random-btn' onClick={randomPerson}>surprise me</button>
        </article>
      </section>
    </main>
  )
}
