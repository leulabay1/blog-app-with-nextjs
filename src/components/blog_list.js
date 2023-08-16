import React from "react";
import Blog from "./blog";
import style from "../styles/Home.module.css"
function BlogList({blogs}){
    return <>
        <div className={style.grid}>
            {blogs.map((blog)=>( <Blog blog={blog}/>))}
        </div>
    </>
}
export default BlogList