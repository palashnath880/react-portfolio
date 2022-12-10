import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function BlogPaginaton({ TotalPage }) {
    const [prevPage, setPrevPage] = useState(0);
    const [nextPage, setNextPage] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [pagenate, setPagenate] = useState([]);
    const { page } = useParams();

    useEffect(() => {
        if (!page) {
            setCurrentPage(1);
        } else {
            setCurrentPage(parseInt(page));
        }
        if (currentPage >= 1) {
            setPrevPage(currentPage - 1);
        }
        if (currentPage < TotalPage) {
            setNextPage(currentPage + 1);
        }

        const pagenatePage = [];
        const startPage = currentPage > 3 ? currentPage - 2 : 1;
        //declare endpage
        let endPage = currentPage <= 3 ? 5 : currentPage + 2;
        //reassign endpage
        endPage = TotalPage - 2 <= currentPage ? TotalPage : endPage;

        for (let i = startPage; i <= endPage; i++) {
            pagenatePage.push(i);
        }
        setPagenate(pagenatePage);
    }, [page, currentPage]);

    return (
        <>
            <div className="container">
                <nav className="mt-5 d-flex justify-content-center" aria-label="Page navigation">
                    <ul className="pagination">

                        {/* Prev page pagenation */}
                        {prevPage !== 0 ? (
                            <li className="page-item">
                                <Link className="page-link position-relative" to={`/blog/${prevPage}`} aria-label="Previous">
                                    <span className='position-absolute top-0 start-50 translate-middle-x' aria-hidden="true">&laquo;</span>
                                    <span className="visually-hidden">Previous</span>
                                </Link>
                            </li>
                        ) : ''}

                        {pagenate.map((item, key) => (
                            <li className={`page-item ${currentPage === item ? 'active' : ''}`} key={key}><Link className="page-link" to={`/blog/${item}`}>{item}</Link></li>
                        ))}

                        {/* Next page pagenation */}
                        {nextPage !== 0 ? (
                            <li className="page-item">
                                <Link className="page-link position-relative" to={`/blog/${nextPage}`} aria-label="Next">
                                    <span className='position-absolute top-0 start-50 translate-middle-x' aria-hidden="true">&raquo;</span>
                                    <span className="visually-hidden">Next</span>
                                </Link>
                            </li>
                        ) : ''}

                    </ul>
                </nav>
            </div>
        </>
    )
}
