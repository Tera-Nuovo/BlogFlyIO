import { ArticleHead } from "../../components";
import { SolidMd } from "../../utills/SolidMd";
import image from "/src/assets/livetone.png";
export const title = 'Live Tone'
export const date = 'March 28 2023'
export const description = 'A live coding environment for Tone.js'
export const thumbnailUrl = image;


function firstpost() {

    return (
        <div>
            <ArticleHead title={title} description={description} />
            <SolidMd content={`
# Live Tone

This is a project I made to be able to live code in Tone.js. It's a work in progress, but I think it's pretty cool.

## How to use it

To use it you just need to press ctrl or command + enter to run the code.
If you highlight some code and press ctrl or command + enter it will run the highlighted code.
If nothing is highlighted it will run the code on the line the cursor is on.

Check out the documentation for Tone.js [here](https://tonejs.github.io/docs/14.8.25/index.html)

I will make a short tutorial on how to use it soon.
in the meantime you can experiment with it and see what you can do.

[Click here to try the editor!](https://freaqcreation.art/projects/livetone)

Enjoy!`} />
        </div>
    )
}

export default firstpost;