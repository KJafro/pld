import React from 'react'
import './pagination.css'

export const Pagination = ({ podcastsPerPage, totalPodcasts, paginate }) => {
    const pageNumbers = [];
    for(let i =1; i <= Math.ceil(totalPodcasts / podcastsPerPage); i++) {
        pageNumbers.push(i);
    }
  return (
    <nav>
        <ul className='pagination'>
            {pageNumbers.map(number => (
                <li key={number} className="page-item">
                    <button onClick={() => paginate(number)} href="#!" className='page-link'>
                        {number}
                    </button>
                </li>
            ))}
        </ul>
    </nav>
  )
}
