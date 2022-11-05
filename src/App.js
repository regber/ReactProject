import react, { useState,useRef } from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
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

     const inputRef = useRef();

    const [post,setPost]=useState({title:'',body:''});


    const addNewPost=(e)=>{
        e.preventDefault();



        SetPosts([...posts,{...post,Id:Date.now()}]);

        setPost({title:'', body:''});
    }

    return(

        <div className="App">
            <form >
                <MyInput value={post.title} onChange={event=>setPost({...post,title:event.target.value})} type='text' placeholder='title'></MyInput>
                <MyInput value={post.body} onChange={event=>setPost({...post,body:event.target.value})} type='text'  placeholder='body'></MyInput>
                <MyButton onClick={addNewPost} >Create post</MyButton>
            </form>
            <PostList posts={posts} title='List'></PostList>
        </div>

        )
}



export default App;