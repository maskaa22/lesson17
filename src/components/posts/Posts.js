import Post from "../post/Post";

export default function Posts ({items})
{
    return(
        <div>
            {
                items.map(val => <Post key={val.id} item={val}/>)
            }
        </div>
    );
}