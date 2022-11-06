import react, { useState,useRef,useMemo } from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import MyModal from "./components/UI/MyModal/MyModal";
import MySelect from "./components/UI/select/MySelect";
import './style/App.css';

function App(){
    const [posts,SetPosts]=useState([
        {Id:1, title:"Javascript", body:"c1to to tam eshe"},
        {Id:2, title:"bavascript 2", body:"c2to to tam eshe"},
        {Id:3, title:"davascript 3", body:"c4to to tam eshe"},
        {Id:4, title:"eavascript 4", body:"c3to to tam eshe"}]);


        const [filter,setFilter]=useState({filter:'',sort:''});

        const [visible, setVisible]=useState(false);
        

    const getSortedPosts=()=>{

        if(filter.sort)
        {
            return [...posts].sort((a,b)=>a[filter.sort].localeCompare(b[filter.sort]));
        }

        return posts;
    }

    const getFilterPosts=()=>{
        if(filter.filter)
        {
            return [...sortedPosts].filter(post=>post.title.toLowerCase().includes(filter.filter.toLowerCase()));
        }

        return sortedPosts;
    }

    const sortedPosts= useMemo(() => getSortedPosts(), [filter.sort,posts]);
    const sortedAndFilterPosts= useMemo(() => getFilterPosts(), [filter.filter,sortedPosts]);
     

     const CreatePost=(newPost)=>{
        SetPosts([...posts,newPost]);
        setVisible(false);
     }
     const DeletePost=(id)=>{
        SetPosts(posts.filter(post=>post.Id!==id))
     }


    return(

        <div className="App">
            <MyModal visible={visible} setVisible={setVisible} >
                <PostForm createPost={CreatePost}/>
            </MyModal>
            <MyButton onClick={()=>setVisible(true)}>CreatePost</MyButton>
            
            <hr style={{margin:'15px 0px'}}/>
            <PostFilter filter={filter} setFilter={setFilter} />
            <PostList deletePost={DeletePost} posts={sortedAndFilterPosts} title='List'></PostList>
        </div>

        )
}



export default App;