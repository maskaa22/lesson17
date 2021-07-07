import Comment from "../comment/Comment";

export default function Comments ({items})
{
    return(
        <div>
            {
                items.map(val => <Comment key={val.id} item={val}/>)
            }
        </div>
    );
}