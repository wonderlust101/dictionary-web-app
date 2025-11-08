import PlayIcon from "@/assets/images/icon-play.svg?react"
import styles from "./DictionaryHeader.module.css";

type DictionaryHeaderProps = {
    word: string;
    phonetic: string;
    phoneticAudio: string;
}

function DictionaryHeader({word, phonetic, phoneticAudio}: DictionaryHeaderProps) {
    return (
        <div className={styles.dictionaryHeader}>
            <div>
                <h2 className="heading-lg">{word}</h2>
                <p className="heading-md normal">{phonetic}</p>
            </div>

            <button
                className={styles.playButton}
                onClick={() => new Audio(phoneticAudio).play()}
            >
                <PlayIcon className={styles.playButton} />
            </button>
        </div>
    );
}

export default DictionaryHeader;