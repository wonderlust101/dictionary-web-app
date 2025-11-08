import type { Word } from "@/type/word.tsx";

import DictionaryHeader from "@/components/Dictionary/DictionaryHeader/DictionaryHeader.tsx";
import DictionaryDefinition from "@/components/Dictionary/DictionaryDefinition/DictionaryDefinition.tsx";

import NewWindowIcon from "@/assets/images/icon-new-window.svg?react";

import styles from "./Dictionary.module.css";

type DictionaryProps = {
    word: Word;
}

function Dictionary({word}: DictionaryProps) {
    return (
        <section className={styles.dictionary}>
            <DictionaryHeader
                word={word.word}
                phonetic={word.phonetic}
                phoneticAudio={word.phonetics.find(phonetic => phonetic.audio !== '')?.audio || ""}
            />

            {word.meanings.map((meaning, index) =>
                <DictionaryDefinition
                    key={index}
                    partOfSpeech={meaning.partOfSpeech}
                    definitions={meaning.definitions}
                    synonyms={meaning.synonyms}
                />
            )}

            <div>
                <hr/>
                <div className={styles.source}>
                    <h3 className="body-sm">Source</h3>
                    <a className="body-sm" href={word.sourceUrls[0]}>
                        {word.sourceUrls[0]}
                        <NewWindowIcon/>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Dictionary;