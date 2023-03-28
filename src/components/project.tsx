import { SolidMd } from "~/utills/SolidMd";
import styles from "./project.module.scss";

interface projectProps {
    title: string;
    date: string;
    description: string;
    thumbnailUrl: string;
    slug: string;
}


function project({ title, date, description, thumbnailUrl, slug }: projectProps) {
    const num = () => Math.floor(Math.random() * 255);
    return (
        <div class={styles.projectContainer}>
            <hr class="white-line horizontal-line"></hr>
            <section>
                <a href={`/projects/${slug}`}>
                    <div class="project">
                        <h2 class={styles.projectTitle}>{title}</h2>
                        <div class="project__image">
                            <img src={thumbnailUrl} alt="project thumbnail" />
                        </div>
                        <div class="project__text" >
                            <SolidMd content={description} />
                        </div>
                    </div>
                </a>
            </section>
        </div>
    )
}

export default project;