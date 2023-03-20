import { Blog } from "@/components/blogs/Blog";
import { ALL_BLOGS } from "@/utils/utils";
import Head from "next/head";
import styles from "../styles/Blogs.module.css";

export default function Blogs() {
  return (
    <div className={styles.blogs}>
      <Head>
        <title>Regen Rangers | Blogs</title>
        <meta
          name="Regen Rangers Blogs Page"
          content="All community blogs related to regen rangers"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <h2>Blogs</h2>
      <h4>Latest</h4>

      <div className={styles.allBlogs}>
        {ALL_BLOGS.map((blog, index) => {
          return (
            <Blog
              title={blog.title}
              author={blog.author}
              snippet={blog.snippet}
              link={blog.link}
              date={blog.date}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}
