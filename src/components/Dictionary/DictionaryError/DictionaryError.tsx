import styles from "./DictionaryError.module.css";

function DictionaryError() {
    return (
        <div className={styles.dictionaryError}>
            <h2 className={styles.header}>😕</h2>

            <div className={styles.message}>
                <h3>No Definitions Found</h3>

                <p className={`${styles.messageBody} body-md`}>
                    Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at later time or head to the web instead.
                </p>
            </div>
        </div>
    );
}

export default DictionaryError;