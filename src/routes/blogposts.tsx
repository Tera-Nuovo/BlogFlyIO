import { Outlet } from "solid-start";
import styles from "./blogposts.module.scss";

export default function BlogPosts() {
  return (
    <div>
      {/* <h1>Blog Posts</h1> */}
      <Outlet />
    </div>
  );
};

