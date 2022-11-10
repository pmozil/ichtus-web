import { useState, useEffect } from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, useSearchBox, useHits, Snippet } from 'react-instantsearch-hooks-web';
import styles from "../scss/Nav.module.scss";
import Link from "next/link";

const searchClient = algoliasearch('LU7CH16PST', '06d0fc54f3c18abca49e89a3d8471ccf');

function SearchBox ({ query, refine }) {
    return (
        <input type="search" value={query} onChange={evt => refine(evt.target.value)} />
    );
}

function Results ({ active, hide, reset }) {
    const { hits, results, sendEvent } = useHits();

    return active ? (
        <div className={styles.results}>
            {hits.map((result, index) => (
                <Link href={result.url}>
                    <div className={styles.result} onClick={() => {hide(); reset && reset();}}>
                        <div className={styles.title}>
                            {result.title}
                        </div>
                        <div className={styles.content}>
                            <Snippet attribute="content" hit={result} />
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    ) : null;
}

function SearchBar({ hide }) {
    const { query, refine, clear, isSearchStalled } = useSearchBox();

    return (
        <div className={styles.searchcontainer}>
            <div className={styles.searchbar}>
                <SearchBox query={query} refine={refine} />
            </div>
            <Results active={query} hide={hide} reset={clear} />
        </div>
    );
}

export default function Search({ hide }) {
    return (
        <InstantSearch searchClient={searchClient} indexName="netlify_1e91fa42-c577-472f-875f-f59313a1e197_main_all">
            <SearchBar hide={hide} />
        </InstantSearch>
    );
}
