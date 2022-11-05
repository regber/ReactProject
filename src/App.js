import react, { useState,useRef } from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import PostForm from "./components/PostForm";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import './style/App.css';

function App(){
    const [posts,SetPosts]=useState([
        {Id:1, title:"Javascript", body:"cto to tam eshe"},
        {Id:2, title:"Javascript 2", body:"cto to tam eshe"},
        {Id:3, title:"Javascript 3", body:"cto to tam eshe"},
        {Id:4, title:"Javascript 4", body:"cto to tam eshe"}]);


    
     const CreatePost=(newPost)=>{
        console.log(newPost);
        SetPosts([...posts,newPost]);
     }


    return(

        <div className="App">
            <PostForm createPost={CreatePost}/>
            <PostList posts={posts} title='List'></PostList>
        </div>

        )
}



export default App;