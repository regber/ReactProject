import react from "react";
import MyButton from "./UI/button/MyButton";

const PostItem=(props)=>{
    var {title,body}=props.post;
    var number = props.number;
    return(
        <div className="post">
        <div className="post_content">
            <strong>{number}.{title}</strong>
            <div>
                {body}
            </div>
        </div>
        <div className="post_btn">
            <MyButton>Удалить</MyButton>
        </div>
    </div>
    );
}

export default PostItem;