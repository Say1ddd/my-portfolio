import styles from "../page.module.css";
import { Suspense } from "react";

export default function Loading() {
    return (
        <div className={styles.loading__container}>
            <span className={styles.text}>Sajid/Portfolio</span>
        </div>
    );
};
