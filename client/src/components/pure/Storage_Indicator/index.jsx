import styles from './storage_indicator.module.css';

function Storage_Indicator({number,txt}) {
    return ( 
        <div className={styles.storage_indicator}>
                <h4>{number}</h4>
                <span>{txt}</span>
        </div>
     );
}

export default Storage_Indicator;