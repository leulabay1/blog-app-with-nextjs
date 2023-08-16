import React, {useRef, useState} from "react"


import Link from "next/link"
import BlogPageStyle from "../../../styles/BlogPage.module.css"
import style from "../../../styles/Home.module.css"

function BlogPage({blog}){
    const [edit, setEdit] = useState(false)
    const titleRef = useRef(null)
    const bodyRef = useRef(null)
    const changeEditState = async (e)=>{
        e.preventDefault()
        setEdit(true)
    }
    const buttonSubmit = async(e)=>{
        e.preventDefault()
        fetch(`https://jsonplaceholder.typicode.com/posts/${blog.id}`,{
            method: "PATCH",
            body: JSON.stringify({
                title: titleRef.current.value? titleRef.current.value : blog.title,
                body: bodyRef.current.value? bodyRef.current.value : blog.body,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
              }
        }
        
        ).then((res)=> res.json()).then((json)=>alert("Edit Succesful")).catch(()=>alert("Error on Editing"))
    }

    return <div className={BlogPageStyle.wraper}>
    <h1>Blog Page</h1>
    { edit?
    <form id="create-post-form" className={BlogPageStyle.postform}>
    <label for="title" className={BlogPageStyle.postformlabel}>Title:</label>
    <input ref={titleRef} placeholder={`${blog.title}`} className={BlogPageStyle.postforminput} type="text" id="title" name="title" required/>
    <label className={BlogPageStyle.postformlabel} for="body">Body:</label>
    <textarea ref={bodyRef} placeholder={`${blog.body}`} className={BlogPageStyle.postforminput} id="body" name="body" rows="4" required></textarea>
    <button onClick={buttonSubmit} className={BlogPageStyle.button} type="submit">Save Edit</button>
  </form>: <div className={`${style.card}`}>
  <Link href="/blog/[id]" as={`blog/${blog.id}`} >
  <h2 className={style.cardh2}>{blog.title}</h2>
  <div className={style.cardp}>{blog.body}</div>
  <button onClick={changeEditState} className={BlogPageStyle.button} type="submit">Edit Blog</button>
  </Link>
  </div>}
    <Link href="/">
    Go Back
    </Link>
    </div>
}

export const getServerSideProps = async (context) => {
    console.log(context.params.id)
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const blog = await res.json()
    console.log(blog)

    return {
        props: {
            blog
        }
    }
}

export default BlogPage