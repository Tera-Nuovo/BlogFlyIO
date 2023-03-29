import { ArticleHead } from "../../components";
import { SolidMd } from "../../utills/SolidMd";
import image from "/src/assets/introthumbnail.png";
export const title = 'Welcome'
export const date = 'November 14, 2022'
export const description = 'Introduction to Freaq Creation'
export const thumbnailUrl = image;
//get random image from unsplash
// insert image into markdown
// to insert image into markdown, use this syntax:
// ![alt text](image url)
// to set the size of the image, use this syntax:

const md: string = `
# Welcome to Freaq Creation

![alt text](${image})

Hi there!

This is the brand new website for Freaq Creation. 

It's still a work in progress, and not much is here yet.

However, gradually more cool projects will be added, so please check back soon.

Thanks for visiting!

Enjoy your stay!

Freaq Creation
`


function Welcome() {
  return (<div>
    <ArticleHead title={title} description={description} />
    <div>
      <SolidMd content={md} />
    </div>
  </div>
  )
}

export default Welcome;
