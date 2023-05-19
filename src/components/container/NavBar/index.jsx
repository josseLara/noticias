import * as React from 'react';
import styles from './navbar.module.css';

// icons
import { AiOutlineMenuFold, AiOutlineInbox } from 'react-icons/ai'
import { BiNews } from 'react-icons/bi';
import { MdOutlineAccountCircle, MdOutlineSportsBasketball } from 'react-icons/md';
import { FiMusic } from 'react-icons/fi';
import { IoExit } from 'react-icons/io5'
import Link from 'next/link';
// --> paginas del menu


function NavBar() {
  let [active, setActive] = React.useState('');
  React.useEffect(() => {
    if (window.location.href.includes('sports')){ setActive('sports')}
     if (window.location.href.endsWith('3000/')) {setActive('news')}
     if (window.location.href.includes('storage')){ setActive('storage')}
     if (window.location.href.includes('account')){ setActive('account')}

  }, [])


  return (
    <header className={styles.navbar}>
      <div className={styles.navbar__header}>
        {/* logo */}
        <div className={styles.navbar__logo}>
          <h2>Malse</h2>
          <AiOutlineMenuFold />
        </div>
        {/* profile */}
        <div className={styles.navbar__profile}>
          <div className={styles.navbar__profile__img}>
            <img src="https://images.pexels.com/photos/7026501/pexels-photo-7026501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="profile" />
            <div className={styles.navbar__profile__online}></div>
          </div>
          <div className={styles.navbar__profile_name}>
            <p>Ector Falto</p>
            <span>Premiun Plan</span>
          </div>
        </div>

      </div>
      {/* menu links */}
      <ul className={styles.navbar__links}>
        <li className={active == 'storage'  ? styles.navbar__links__active : ''}>
          <Link href="storage">
            <AiOutlineInbox />
            <span>Storage</span>
          </Link>
        </li>
        <li className={active == 'news' ? styles.navbar__links__active : ''}>
          <Link href="/">
            <BiNews />
            <span>News</span>
          </Link>
        </li>
        <li className={active == 'sports' ? styles.navbar__links__active : ''}>
          <Link href="sports">
            <MdOutlineSportsBasketball />
            <span>Sports</span>
          </Link>
        </li>
      </ul>
      {/* settings links */}
      <ul className={`${styles.navbar__links_bottom} ${styles.navbar__links}`}>
        <li className={active == 'account' ? styles.navbar__links__active : ''}>
          <Link href="account">
            <MdOutlineAccountCircle />
            <span>Account</span>
          </Link>
        </li>
        <li>
          <IoExit />
          <span>Log Out</span>
        </li>

      </ul>
    </header>
  );
}
export default NavBar;