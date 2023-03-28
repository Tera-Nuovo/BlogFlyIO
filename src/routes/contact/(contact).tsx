import { SolidMd } from "../../utills/SolidMd";

const md = `# Contact

If you have any questions or want to collaborate with us, please contact us at:

freaqcreation@proton.me`;

function Contact() {
    return (
        <div>
            {/* <hr class="white-line horizontal-line"></hr> */}
            <section>
                <SolidMd content={md} />
            </section>
        </div>
    )
}

export default Contact;