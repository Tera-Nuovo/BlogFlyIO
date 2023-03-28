import { SolidMd } from "../../utills/SolidMd";

const md = `# About
Freaq Creation is an art collective!

We are dedicated to exploring the space of creativity.`;

function About() {
    return (
        <div>
            {/* <hr class="white-line horizontal-line"></hr> */}
            <section>
                <SolidMd content={md} />
            </section>
        </div>
    )
}

export default About;