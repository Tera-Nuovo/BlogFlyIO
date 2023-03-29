import { A } from "solid-start";
import styles from './nav.module.scss'
import hrStyles from './hr.module.scss'
//import logo to to use in the img tag
import image from '/src/assets/freaq.png'


function Nav() {
    return (
        <div class={styles['nav-container']}>
            <nav class={styles.nav}>
                <div class={styles.logo}>
                    <A href="/">
                        <img src={image} alt="logo" />
                    </A>
                </div>
                <div class={styles['links-container']}>
                    <div class={styles.links}>
                        <A href="/">Home</A>
                        <A href="/projects">Projects</A>
                        <A href="/about">About</A>
                        <A href="/contact">Contact</A>
                    </div>
                </div>
            </nav>
            {/* add styles hr and horizontal line */}
            <hr class={hrStyles['horizontal-line']}></hr>
        </div>
    );
}

export default Nav;