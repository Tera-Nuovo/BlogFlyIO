import { SolidMd } from "../../utills/SolidMd";

import Project from "../../components/project";

import { liveToneProps } from "./livetone";

import styles from "./projects.module.scss";
import hrStyle from "../../components/hr.module.scss";



function Projects() {
    return (
        <div>
            {/* <hr class="white-line horizontal-line"></hr> */}

            <h1 class={styles.projectsTitle}>Projects</h1>
            <Project {...liveToneProps} />

        </div>
    )
}

export default Projects;