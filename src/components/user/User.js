import {useState} from "react";
import {getPostsofUser} from "../../api/API";
import Posts from "../posts/Posts";

export default function User ({item})
{
    const [posts, setPosts] = useState([]);
    const getPosts=()=>{
        getPostsofUser(item.id).then(value => {
            setPosts([...value.data])
        })
    }
    return(
        <div>
                <i>{item.name}</i>
                <button onClick={()=>{
                    getPosts();
                }}> Click </button>
            <Posts items={posts}/>
        </div>
    );
}