import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import BlogList from '@/components/blog_list'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home({blogs}) {
  return (
    <>
      <Head>
        <title>Blog App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.title}>
          Wellcome to the Blog app
        </div>
        <Link href="/newBlog">
          <button className={styles.buttonNav} > Create New Post</button>
          </Link>          
        <div>
        <BlogList blogs={blogs} />
        </div>
      </main>
    </>
  )
}

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
  const blogs = await res.json()
  return {
    props: {blogs}
  }
}