import styles from './menu_header.module.css';
import { IoMdNotifications } from 'react-icons/io';
import { RiMessage3Fill } from 'react-icons/ri';
import { setType } from '@/feactures/datos/datosSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function Menu_Header() {
    let [menuActive, setMenuActive] = useState('datosGeneral');
    let dispatch = useDispatch();

    let handletSetType = (ArgType) => {
        dispatch(setType(ArgType));
        setMenuActive(ArgType)
    }
    return (
        <div className={styles.menu_header}>
            {/* list of categori */}
            <ul className={styles.menu_header__list}>
                <li
                    onClick={() => handletSetType('datosGeneral')}
                    className={menuActive == 'datosGeneral' ? styles.menu_header__list_active : null}
                >Lastest New</li>

                <li
                    onClick={() => handletSetType('dataBusiness')}
                    className={menuActive == 'dataBusiness' ? styles.menu_header__list_active : null}
                >Business</li>

                <li
                    onClick={() => handletSetType('dataTechnology')}
                    className={menuActive == 'dataTechnology' ? styles.menu_header__list_active : null}
                >Technology</li>
            </ul>
            {/* optiones */}
            <div className={styles.menu__header__options}>
                <IoMdNotifications />
                <RiMessage3Fill />
                <form action="" method="get" className={styles.form_search}>
                    <input type="text" placeholder='Type to Seach' />
                </form>
            </div>

        </div>
    );
}

export default Menu_Header;