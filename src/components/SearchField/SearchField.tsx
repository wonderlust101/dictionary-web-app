import type { KeyboardEvent } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import SearchIcon from '@/assets/images/icon-search.svg?react'

import styles from "./SearchField.module.css";

function SearchField() {
    const [searchParams, setSearchParams] = useSearchParams();

    const query = searchParams.get('word');
    const [searchTerm, setSearchTerm] = useState<string>(query || "")
    const [error, setError] = useState<string>("")

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key == "Enter") {
            if (searchTerm.trim()) {
                setError("");
                setSearchParams({ word: searchTerm })
            }
            else {
                setError("Whoops, can’t be empty…");
            }
        }
    }

    return (
        <div className={styles.searchFieldContainer}>
            <input
                className={`${styles.searchField} ${error ? styles.searchFieldError : ""}`}
                type="text"
                placeholder="Search for any word…"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyDown}
            />

            {error && <p className={styles.errorMessage}>{error}</p>}

            <SearchIcon className={styles.icon}/>
        </div>
    );
}

export default SearchField;