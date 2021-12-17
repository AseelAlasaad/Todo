import React from "react";
import ReactPaginate from "react-paginate";
function Pagination({ pageNumbers, totalTodos, endpage }) {
    const Page = [];
    for (let i = 1; i < Math.ceil(totalTodos / endpage); i++) {
        Page.push(i);
        1
    }
    return (
        <>
            <nav  className="pagination-contianer">
                <ul className='pagination-list'>
                    {Page.map(number => (
                        <li key={number} className='page-item'>
                            <button onClick={() => pageNumbers(number)} className='page-link'>
                                {number}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
}

export default Pagination;