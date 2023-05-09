import * as React from 'react';
import styles from './navbar.module.css';
// icons
import {AiOutlineMenuFold,AiOutlineInbox} from 'react-icons/ai'
import {BiNews} from 'react-icons/bi';
import {MdOutlineAccountCircle, MdOutlineTravelExplore} from 'react-icons/md';
import {FiMusic} from 'react-icons/fi';
import {IoExit} from 'react-icons/io'
// --> paginas del menu
const settings = ['Perfil', 'Cerrar Sección'];

function NavBar() {


  return (
    <header className={styles.navbar}>
      {/* logo */}
      <div className={styles.navbar__logo}>
        <h2>Malse</h2>
        <AiOutlineMenuFold/>
      </div>
      {/* profile */}
      <div className={styles.navbar__profile}>
        <img src="https://images.pexels.com/photos/7026501/pexels-photo-7026501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="profile" />
        <div className={styles.navbar__profile_name}>
          <p>Ector Falto</p>
          <span>Premiun Plan</span>
        </div>
      </div>
      {/* menu links */}
      <ul className={styles.navbar__links}>
        <li>
          <AiOutlineInbox/>
          <span>Storage</span>
        </li>
        <li>
          <BiNews/>
          <span>News</span>
        </li>
        <li>
          <FiMusic/>
          <span>Music</span>
        </li>
        <li>
          <MdOutlineTravelExplore/>
          <span>Travel</span>
        </li>
      </ul>
       {/* settings links */}
       <ul className={styles.navbar__links}>
        <li>
          <MdOutlineAccountCircle/>
          <span>Account</span>
        </li>
        <li>
          <IoExit/>
          <span>Log Out</span>
        </li>
       
      </ul>
    </header>
  );
}
export default NavBar;