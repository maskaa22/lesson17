import {BrowserRouter as Router,Route, Link} from "react-router-dom";
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";
import {useEffect, useState} from "react";
import {getComments, getPosts, getUsers} from "./components/api/API";

export default function App ()
{
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        getUsers().then(val=> {
            setUsers(val.data);
        })
    }, []);

    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        getPosts().then(value => {
            setPosts(value.data)
        })
    }, []);

    const [comments, setComments] = useState([]);
    useEffect(()=> {
        getComments().then(value => {
            setComments(value.data);
        })
    }, [])




    return(
        <Router>
            <div>

                    <div><Link to="/">Home page</Link></div>
                    <div><Link to="/users">Users page</Link></div>
                    <div><Link to="/posts">Posts page</Link></div>
                    <div><Link to="/comments">Comments page</Link></div>

                    <Route path={'/'} exact render={()=>{return <div>home</div>}}/>
                    <Route path={'/users'} render={()=>{
                        return <Users items={users}/>
                    }}/>
                    <Route path={'/posts'}>
                        <Posts items={posts}/>
                    </Route>

                    <Route path={'/comments'}>
                        <Comments items={comments}/>
                    </Route>

            </div>
        </Router>
    );
}