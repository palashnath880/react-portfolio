import React from 'react';
import { Link } from 'react-router-dom';

export default function BlogItem({ BlogThumbnail }) {
    return (
        <>
            <div className="col-md-6">
                <Link to="#" className="blog-list d-block mb-5">
                    <div className="blog-list--img">
                        <img src={BlogThumbnail} alt="Blog Thumbnail" className="img-fluid" />
                        <div className="blog-list--details d-flex justify-content-center align-items-center">
                            <div className="blog-list--details-in">
                                <p className="blog-date text-white">02 Jan, 2020</p>
                                <span className="blog-cat">Design</span>
                            </div>
                        </div>
                    </div>
                    <div className="blog-list--desc mt-4">
                        <h3>10 tips for drawing with coloured pencils</h3>
                        <p>Fusce eget urna ante. Donec massa velit, varius a accumsan ac, tempor iaculis massa. Sed placerat justo sed libero varius vulputate. Ut a mi tempus massa malesuada fermentum.</p>
                    </div>
                </Link>
            </div>
        </>
    )
}
