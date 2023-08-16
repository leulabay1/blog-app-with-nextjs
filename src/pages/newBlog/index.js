import React, {useRef, useState} from "react"
import BlogPageStyle from "../../styles/BlogPage.module.css"
import Link from "next/link"
function CreateBlogPage(){
    const titleRef = useRef(null)
    const bodyRef = useRef(null)
    const buttonSubmit = async(e)=>{
        e.preventDefault()
        fetch(`https://jsonplaceholder.typicode.com/posts/`,{
            method: "POST",
            body: JSON.stringify({
                title: titleRef.current.value,
                body: bodyRef.current.value,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
              }
        }
        
        ).then((res)=> res.json()).then((json)=>alert(`Post Created with title ${json.title}`)).catch((err)=>alert("Error on Editing"))
    }

    return (<div className={BlogPageStyle.wraper}>
    <h1>Create a new Blog</h1>
    <form id="create-post-form" className={BlogPageStyle.postform}>
    <label for="title" className={BlogPageStyle.postformlabel}>Title:</label>
    <input ref={titleRef} placeholder="Enter the title of the post" className={BlogPageStyle.postforminput} type="text" id="title" name="title" required/>
    <label className={BlogPageStyle.postformlabel} for="body">Body:</label>
    <textarea ref={bodyRef} placeholder="Enter the body of the post" className={BlogPageStyle.postforminput} id="body" name="body" rows="4" required></textarea>
    <button onClick={buttonSubmit} className={BlogPageStyle.button} type="submit">Create Post</button>
  </form>
  <Link href="/">
  Go Back</Link>
    </div>)
}
export default CreateBlogPage