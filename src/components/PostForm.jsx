import react, { useState,useRef } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";



const PostForm = ({createPost}) => {

    const [post,setPost]=useState({title:'',body:''});

    const addNewPost=(e)=>{
        e.preventDefault();

        const newPost={
            ...post, Id:Date.now()
        };
        createPost(newPost);

        setPost({title:'', body:''});
    }
  return (
    <form >
        <MyInput value={post.title} onChange={event=>setPost({...post,title:event.target.value})} type='text' placeholder='title'></MyInput>
        <MyInput value={post.body} onChange={event=>setPost({...post,body:event.target.value})} type='text'  placeholder='body'></MyInput>
        <MyButton onClick={addNewPost} >Create post</MyButton>
    </form>
  )
}

export default PostForm;