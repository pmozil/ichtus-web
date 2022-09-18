import * as React from "react";
import styles from "../scss/main.module.scss";
import Link from "next/link";
import { RiArrowDownSLine } from "react-icons/ri";
import {
    FaPlay
} from "react-icons/fa";
import Logo from "./logo.svg";

export default function MainPage({scrollRef}) {
    return (
        <div className={styles.content}>
            <div className={styles.info}>
                <div className={styles.container}>
                    <div className={styles.logo}>
                        <Logo />
                    </div>
                    <div className={styles.text}>
                        Title here
                    </div>
                    <span className={styles.separator} />
                    <div className={styles.text}>
                        More info...
                    </div>
                </div>
            </div>
            <div className={styles.intro}>
                <span className={styles.title}>
                    Logo name
                </span>
                <div className={styles.image}>
                    <span className={styles.overlay} />
                    <span className={styles.button}>
                        <FaPlay />
                    </span>
                </div>
            </div>
        </div>
    );
}
