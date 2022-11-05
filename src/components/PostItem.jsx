import react from "react";

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
            <button>Удалить</button>
        </div>
    </div>
    );
}

export default PostItem;