import styles from './account_seleted.module.css';
import { IoIosArrowDown } from 'react-icons/io'
import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { useDispatch, useSelector } from 'react-redux';
import { setDataNewsContry, setDatosLanguage } from '@/feactures/datos/datosSlice';

function Account_Seleted({ type, text }) {
    let dispatch = useDispatch();

    let settings = {
        newContry: useSelector(state => state.datos.newsContry)
    }

    let [animSeletedActive, setAnimSeletedActive] = useState(false);
    const [animSelected, api] = useSpring(
        () => ({
            from: { x: 0, opacity: 1 },
            to: { x: 300, opacity: 0 },
            config: {
                duration: 300,
            },
            reverse: animSeletedActive,
            loop: animSeletedActive
        }),
        [animSeletedActive]
    )

    let handleLanguage = (Language) => {
        dispatch(setDatosLanguage(Language))
    }
    let handleNewContry = (contry) => {
        dispatch(setDataNewsContry(contry))
    }
    

    return (
        <div className={styles.select}>
            <label htmlFor="">{text}</label>
            {/* contry seleted */}
            <div className={styles.select__country} onClick={() => setAnimSeletedActive(!animSeletedActive)}>
                {settings.newContry == 'us' && <img src="/img/estados-unidos.png" alt="bandera" />}
                {settings.newContry == 'ar' &&  <img src="/img/argentina.png" alt="bandera" />}
                {settings.newContry == 'es' && <img src="/img/espana.png" alt="bandera" />}
                {settings.newContry == 'jp' &&  <img src="/img/japon.png" alt="bandera" />}
                <IoIosArrowDown />
            </div>
            {/* options frame */}
            <animated.div className={styles.select__list_contry} style={animSelected}>
                {
                    type &&
                    <>
                        <div className={styles.select__country}>
                            <img src="/img/estados-unidos.png" alt="bandera"  onClick={() => handleLanguage('us')} />
                            <span>US</span>
                        </div>
                        <div className={styles.select__country}>
                            <img src="/img/espana.png" alt="bandera" onClick={() => handleLanguage('es')}/>
                            <span>ES</span>
                        </div>
                    </>
                }
                {
                    !type &&
                    <>
                        <div className={styles.select__country} onClick={() => handleNewContry('us')}>
                            <img src="/img/estados-unidos.png" alt="bandera" />
                            <span>US</span>
                        </div>

                        <div className={styles.select__country} onClick={() => handleNewContry('ar')}>
                            <img src="/img/argentina.png" alt="bandera" />
                            <span>AR</span>
                        </div>

                        <div className={styles.select__country}>
                            <img src="/img/espana.png" alt="bandera" onClick={() => handleNewContry('es')} />
                            <span>ES</span>
                        </div>

                        <div className={styles.select__country}>
                            <img src="/img/japon.png" alt="bandera" onClick={() => handleNewContry('jp')} />
                            <span>JP</span>
                        </div>
                    </>
                }
            </animated.div>
        </div>
    );
}

export default Account_Seleted;