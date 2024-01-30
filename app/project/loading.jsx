import styles from "../page.module.css";
import { Suspense } from "react";

export default function Loading() {
    return (
        <div className={styles.loading__container}>
            <p className={styles.text}>Sajid/Portfolio</p>
        </div>
    );
};
