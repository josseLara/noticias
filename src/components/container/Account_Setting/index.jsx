import { useSpring, animated } from 'react-spring';
import styles from './account_setting.module.css';
import { IoIosArrowDown } from 'react-icons/io'
import { useState } from 'react';
import Account_Seleted from '@/components/pure/Account_Seleted';

function Account_Setting() {

    return (
        <div className={styles.account_setting}>
            <h1>Setting</h1>
            <form className={styles.form}>
                {/* seleted 1 */}
                <Account_Seleted
                    text="Find sources that display news in a specific country."
                />
                {/* seleted 2 */}
                <Account_Seleted 
                text="Find sources that display news in a specific language."
                type={true} />
            </form>
        </div>
    );
}

export default Account_Setting;