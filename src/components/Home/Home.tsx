import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import type { Word } from "@/type/word.tsx";

import SearchField from "@/components/SearchField/SearchField.tsx";
import Dictionary from "@/components/Dictionary/Dictionary.tsx";
import DictionaryError from "@/components/Dictionary/DictionaryError/DictionaryError.tsx";

const API_URL = "https://api.dictionaryapi.dev/api/v2/entries/en"

function Home() {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('word');

    const [word, setWord] = useState<Word[] | null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>("")

    useEffect(() => {
        const abortController = new AbortController()

        const fetchData = async () => {
            try {
                setLoading(true)
                setError("");

                const res = await fetch(`${API_URL}/${query || "keyboard"}`,
                    {signal : abortController.signal}
                )

                if (!res.ok)
                    throw new Error(`Request failed: ${res.statusText}`)

                setWord(await res.json())
            } catch (error) {
                if (error instanceof Error && error.name !== "AbortError") {
                    setError(error.message);
                    console.error(error);
                }
            } finally {
                setLoading(false)
            }
        }

        fetchData()
        return () => abortController.abort()
    }, [query])

    return (
        <>
            <SearchField/>

            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <DictionaryError/>
            ) : word && (
                <Dictionary word={word[0]}/>
            )}
        </>
    );
}

export default Home;