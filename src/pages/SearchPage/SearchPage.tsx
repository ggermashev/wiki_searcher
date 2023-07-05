import React from 'react';
import styles from './SearchPage.module.scss'
import search from "../../store/Search";
import {observer} from "mobx-react-lite";
import Button from "../../components/Button/Button";
import TextInput from "../../components/TextInput/TextInput";
import LinkToPage from "../../components/LinkToPage/LinkToPage";
import SearchIcon from '@mui/icons-material/Search';

const SearchPage = observer(() => {
    return (
        <div className={styles.searchPage}>
            <h1>Find in Wikipedia!</h1>
            <div className={styles.searchWrap}>
                <TextInput
                    value={search.query}
                    placeholder={"Search"}
                    setValue={val => search.query = val}
                    onEnter={() => search.fetchPages()}
                />
                <SearchIcon className={styles.searchIcon} onClick={() => search.fetchPages()}/>
            </div>
            <div className={styles.pages}>
                {search.pages.map(page => <LinkToPage key={page.url} title={page.title} url={page.url}/>)}
            </div>
        </div>
    );
});

export default SearchPage;