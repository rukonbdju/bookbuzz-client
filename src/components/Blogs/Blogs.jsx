import { useEffect, useState } from "react";
import Blog from "./Blog";

const Blogs=()=>{
    const [blogs,setBlogs]=useState([])
    useEffect(()=>{
        fetch("blog.json")
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return(
        <div className="w-4/5 mx-auto my-10">
            <div className="flex flex-col gap-10">
                {blogs.map(item=><Blog key={item.id} blog={item}></Blog>)}
            </div>
        </div>
    )
}
export default Blogs;