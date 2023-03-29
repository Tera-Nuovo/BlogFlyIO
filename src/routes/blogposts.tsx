import { Outlet } from "solid-start";
import styles from "/src/routes/blogposts/blogpost.module.scss";

export default function BlogPosts() {
  return (
    <div class={styles.blogPostBody}>
      <Outlet />
    </div>
  );
};

