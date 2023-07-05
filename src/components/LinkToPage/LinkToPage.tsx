import React, {FC} from 'react';
import styles from './LinkToPage.module.scss'

interface ILinkToPage {
    title: string,
    url: string,
}

const LinkToPage: FC<ILinkToPage> = ({title, url}) => {

    return (
        <div className={styles.linkToPage} onClick={() => {window.open(url, '_blank')}}>
            <h3>{title}</h3>
        </div>
    );
};

export default LinkToPage;