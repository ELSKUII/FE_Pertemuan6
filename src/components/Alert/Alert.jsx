import React from "react";
import styles from "./Alert.module.css";

function Alert(props) {
    /**
     * Children adalah props khusus.
     * Berisi konten/children yang ada di dalam component.
     */
    const { children } = props;

    return (
        <div className={styles.alert}>
            <span className={styles.alert__text}>{children}</span>
        </div>
    );
}

export default Alert;
