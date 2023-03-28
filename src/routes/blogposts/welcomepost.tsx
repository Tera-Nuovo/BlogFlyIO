import { ArticleHead } from "../../components";
import image from "/src/assets/introthumbnail.png";
export const title = 'Welcome'
export const date = 'November 14, 2022'
export const description = 'Introduction to Freaq Creation'
export const thumbnailUrl = image;
//get random image from unsplash


function atro() {
  return (<div>
    <ArticleHead title={title} description={description} />
    <div>
      This is a blog post about <strong>astro build</strong>. <br />
      We'll learn how to build a blog with Astro and why it's better than the alternatives.
    </div>
  </div>
  )
}

export default atro;
