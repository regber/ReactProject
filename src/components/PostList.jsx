import react from "react";
import PostItem from "./PostItem";

const PostList=({posts,title})=>{

    console.log(posts);
    return(
        <div>
            <h1 style={{textAlign:'center'}}>{title}</h1>
            {posts.map((post,index)=>
                <PostItem number={index+1} key={post.Id} post={post}/>
            )}
        </div>
    );
}

export default PostList;