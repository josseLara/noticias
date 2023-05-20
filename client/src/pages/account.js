import Layout from '@/components/Layout';
import styles from '../styles/account.module.css';
import { AiOutlineUser } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
import {IoSettingsOutline} from 'react-icons/io5';
import Avatar from '@/components/container/Avatar/Avatar';
import Account_Detail from '@/components/container/Account_detail/Account_Detail';
import Account_Setting from '@/components/container/Account_Setting';

function Account() {
    return (
        <Layout>
            <main className={styles.main}>
                <div className={styles.main__left}>
                    <ul>
                        <li className={styles.main__left__active}><AiOutlineUser />Profile</li>
                        {/* <li><RiLockPasswordLine />Password</li> */}
                        <li><IoSettingsOutline />Setting</li>
                    </ul>
                </div>
                <div className={styles.main__right}>
                   <Avatar/>
                   <Account_Detail/>
                   {/* <Account_Setting/> */}
                </div>
            </main>
        </Layout>
    );
}

export default Account;