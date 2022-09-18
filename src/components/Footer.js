import styles from "../scss/Footer.module.scss";
import Switcher from "./Themeswitcher.js";
import { FaFacebook } from "react-icons/fa";
import Logo from "./logo.svg";
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

export default function Footer () {
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
                    locaiton
                </div>
                <div className={styles.label}>
                    telephone
                </div>
            </div>
            <div className={styles.column}>
                <div className={styles.label}>
                    socials:
                </div>
                <div className={styles.socials}>
                    <FaFacebook />
                </div>
                <Link href="/">
                    <a href="/" className={styles.logo}>
                        <Logo />
                    </a>
                </Link>
                <Switcher />
            </div>
        </div>
    );
}
