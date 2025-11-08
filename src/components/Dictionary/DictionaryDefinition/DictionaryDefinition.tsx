import styles from "./DictionaryDefinition.module.css";

type DictionaryDefinitionProps = {
    partOfSpeech: string;
    definitions: {
        definition: string;
        example?: string | undefined;
        synonyms: string[];
        antonyms: string[];
    }[];
    synonyms: string[];
}

function DictionaryDefinition({partOfSpeech, definitions, synonyms}: DictionaryDefinitionProps) {
    return (
        <div className={styles.definition}>
            <div className={styles.definitionHeader}>
                <h3 className="heading-md">{partOfSpeech}</h3>
                <hr/>
            </div>

            <div className={styles.meaning}>
                <h4 className="body-md">Meaning</h4>

                <ul className={styles.meaningList}>
                    {definitions.map((definition) =>
                        <li key={definition.definition} className={styles.meaningListItem}>
                            {definition.definition && <p>{definition.definition}</p>}
                            {definition.example && <p className={styles.exampleSentence}>"{definition.example}"</p>}
                        </li>
                    )}
                </ul>
            </div>

            {synonyms.length > 0 &&
                <div className={styles.synonyms}>
                    <h4 className="heading-sm normal">Synonyms</h4>

                    <ul className={styles.synonymsList}>
                        {synonyms.map((synonym: string) =>
                            <li key={synonym} className={`${styles.synonymsListItems} heading-sm`}>
                                {synonym}
                            </li>
                        )}
                    </ul>
                </div>
            }
        </div>
    );
}

export default DictionaryDefinition;