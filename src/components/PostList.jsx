import react from "react";
import PostItem from "./PostItem";

const PostList=({posts,title,deletePost})=>{

    console.log(posts);
    return(
        <div>
            <h1 style={{textAlign:'center'}}>{title}</h1>
            {posts.map((post,index)=>
                <PostItem deletePost={deletePost} number={index+1} key={post.Id} post={post}/>
            )}
        </div>
    );
}

export default PostList;