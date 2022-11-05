import react from "react";
import MyButton from "./UI/button/MyButton";

const PostItem=({deletePost,post,number})=>{
    var {title,body,Id}=post;


    return(
        <div className="post">
        <div className="post_content">
            <strong>{number}.{title}</strong>
            <div>
                {body}
            </div>
        </div>
        <div className="post_btn">
            <MyButton onClick={()=>deletePost(Id)}>Удалить</MyButton>
        </div>
    </div>
    );
}

export default PostItem;