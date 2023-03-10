import styles from "../scss/Footer.module.scss";
import Switcher from "./Themeswitcher.js";
import Link from "next/link";

function FooterLink({ href, children }) {
    return (
        <Link href={href}>
            <a href={href} className={styles.link}>
                {children}
            </a>
        </Link>
    );
}

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.column}>
                <div className={styles.links}>
                    <FooterLink href="/info/about">
                        про нас
                    </FooterLink>
                    <FooterLink href="/info/community">
                        спільнота
                    </FooterLink>
                </div>
            </div>
            <div className={styles.column}>
                <div className={styles.label}>
                    Контактна інформація:
                </div>
                <div className={styles.label}>
                    location
                </div>
                <div className={styles.label}>
                    telephone
                </div>
            </div>
            <div className={styles.column}>
                <Switcher />
            </div>
        </div>
    );
}
