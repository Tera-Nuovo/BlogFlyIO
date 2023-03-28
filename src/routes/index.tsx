import { A, createRouteData, useRouteData } from 'solid-start'
import { BlogPostList } from "~/components/blogpostlist";

type Meta = {
    title: string
    date: string
    description: string
    thumbnailUrl: string
}

export const routeData = () => {
    return createRouteData(async () => {
        const files = import.meta.glob('./blogposts/*.tsx');

        const posts = Object.keys(files).map(async (file) => {
            const slug = file.replace('./blogposts/', '').replace('.tsx', '')
            const meta = await files[file]()

            return { slug, ...((await meta) as Meta) }
        })
        return Promise.all(posts);
    });
}


const Home = () => {
    const posts = useRouteData<typeof routeData>()

    return (
        <div>
            <section>
                <h1>Blog Posts</h1>
                <BlogPostList posts={posts} />
            </section>
        </div>
    )
}

export default Home;