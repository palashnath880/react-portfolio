import BlogItem from "../SubComponants/BlogItem";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function BlogArea() {

    const post_url = `http://localhost/wordpress/custom-api.php`;

    const [ posts, setPosts] = useState([]);
    const [ invalidPost , setInvalidPost ] = useState(true);

    useEffect(() => {

        const xhr = new XMLHttpRequest();
        xhr.onload = () => {
            let responseData;
            try {
                responseData = JSON.parse(xhr.response);
            } catch {
                responseData = []
            }
            if (typeof responseData === 'object' && responseData.status === 'bad') {
                setInvalidPost(false);
            } else { 
                setPosts(responseData.posts);
            }
        }

        xhr.open('GET' , `${post_url}?posts_per_page=3` );
        xhr.send();
        
    }, [post_url]);


    return (
        <section id="blog-area" className="py-5">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="section-title">
                        <h2>Blog Posts</h2>
                    </div>
                </div>
            </div>
                
                <div className="row">
                    {   
                        invalidPost === true ? posts.map((post, index) => <BlogItem key={index} title={post.title} thumbnail={post.thumbnail} slug={post.slug} description={post.content} commentCount={post.comments_number} postDate={post.date} />) : 'invalid Post' 
                    }
            </div>

            <div className="row">
                <div className="col-md-12">
                    <div className="blog-load-btn">
                        <Link to={"/posts"} className="loadmore-btn">Load More</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}