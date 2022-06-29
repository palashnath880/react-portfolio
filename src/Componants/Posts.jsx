import '../page.scss';
import PageTitle from "./SubComponants/PageTitle";
import TitleBg from '../Images/blog/page-title-bg.jpg';
import { useEffect, useState } from "react";
import PostsPostItem from './SubComponants/PostsPostItem';

export default function Posts() {
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

        xhr.open('GET' , `${post_url}?posts_per_page=20` );
        xhr.send();
        
    }, [post_url]);
    return (
        <>
            <PageTitle PageTitleBG={TitleBg} PageTitle={"Blog"} PageDescription="Lorem Ipsum is the better symbol content " />
            <section id="page-content-wrap">
		        <div className="container">
                    <div className="row">
                        {/* Page Left Area  */}
                        <div className="col-md-9">
                            <div className="blog-area-wrap">
                                {   
                                    invalidPost === true ? posts.map((post, index) => <PostsPostItem key={index} title={post.title} thumbnail={post.thumbnail} slug={post.slug} description={post.content} commentCount={post.comments_number} postDate={post.date} />) : 'invalid Post' 
                                }
                            </div>
                        </div>
                        {/* Page Right Area  */}
                        <div className="col-md-3">
                            <div className="sidebar-wrap">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}