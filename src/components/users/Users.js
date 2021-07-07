import User from "../user/User";

export default function Users ({items})
{
    return(
        <div>
            {
                items.map(val => <User key={val.id} item={val}/>)
            }
        </div>
    );
}