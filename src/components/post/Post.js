import {getCommentsofPost} from "../../api/API";
import {useState} from "react";
import Comments from "../comments/Comments";

export default function Post ({item})
{
    const [comments, setComments] = useState([]);
    const getComments=()=>{
        getCommentsofPost(item.id).then(value => {
            console.log(value);
            setComments([...value.data])
        })
    }


    return(
        <div>
            <br/>{item.title}
            <button onClick={()=>{
                console.log(item.id);
                getComments();
            }}>Click me</button>
            <Comments items={comments}/>

        </div>
    );
}