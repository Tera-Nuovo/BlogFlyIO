import { For } from 'solid-js';
import { style } from 'solid-js/web';
import blogPostStyles from './blogpostlist.module.scss'

interface BlogPostListProps {
    posts: any;
}

export function BlogPostList({ posts }: BlogPostListProps) {
    return (
        <div class={blogPostStyles.blogpostlist}>
            <For each={posts()} >
                {(post) => (
                    <a href={`/blogposts/${post.slug}`}>
                        <div class={blogPostStyles.blogPostPreview}>
                            <h2>{post.title}</h2>
                            <div>
                                <img src={post.thumbnailUrl} alt="thumbnail" loading="lazy" />
                            </div>
                            <p>{post.description}</p>
                        </div>
                    </a>
                )}
            </For>
        </div>
    );
}
