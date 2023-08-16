import Link from "next/link"
import style from "../styles/Home.module.css"

function Blog({blog}){
    return(
        <>
        <div className={`${style.card}`}>
        <Link href="/blog/[id]" as={`blog/${blog.id}`} >
        <h2 className={style.cardh2}>{blog.title}</h2>
        <div className={style.cardp}>{blog.body}</div>
        </Link>
        </div>
        </>
    )
}
export default Blog