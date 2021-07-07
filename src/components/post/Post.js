export default function Post ({item})
{
    return(
        <div>
            <br/>{item.title}
            <button onClick={()=>{
                console.log(item.id);
            }}>Click me</button>

        </div>
    );
}