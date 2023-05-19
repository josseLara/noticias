import styles from './tag.module.css';
function Tag({txt}) {
    return ( 
        <button className={styles.btn_tag}>{txt}</button>
     );
}

export default Tag;