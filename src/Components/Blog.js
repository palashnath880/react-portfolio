import React from 'react';
import Footer from './Footer';
import BlogItem from './Utilities/BlogItem';
import BlogImg from '../images/blog-1.jpg';
import BlogPaginaton from './Utilities/BlogPaginaton';

export default function Blog() {
    return (
        <>
            <div className="page-wrapper">

                {/* <!-- START: BLOG --> */}
                <section className="section section-light">
                    <div className="container">
                        <div className="section-head">
                            <span>MY ARTICLES</span>
                            <h2>Blog</h2>
                        </div>

                        <div className="row">
                            <BlogItem BlogThumbnail={BlogImg} />
                            <BlogItem BlogThumbnail={BlogImg} />
                            <BlogItem BlogThumbnail={BlogImg} />
                        </div>
                        <BlogPaginaton TotalPage={10} />
                    </div>
                </section>
                {/* <!-- END: BLOG --> */}

                {/* <!--START: FOOTER--> */}
                <Footer />
                {/* <!--END: FOOTER--> */}
            </div>
        </>
    )
}
