import { useEffect, useState } from 'react';
import styles from './pagination.module.css';
import { ObtenerDatos } from '@/helpers/FetchNews';
import { setDatosGeneral } from '@/feactures/datos/datosSlice';
import { useDispatch, useSelector } from 'react-redux';

export const Pagination = () => {
    let [numberPagination, setNumberPagination] = useState(1);
    let dispatch = useDispatch();
    const newsContry = useSelector(state => state.datos.newsContry);
    const typeNews = useSelector(state => state.datos.type);


    useEffect(() => {

        let fetchData = async () => {
            if (typeNews == 'datosGeneral') {
                let datosGeneral = await ObtenerDatos('general', newsContry, numberPagination)
                dispatch(setDatosGeneral(datosGeneral))

                // let dataTechnology = await ObtenerDatos('technology', newsContry)
                // let dataBusiness = await ObtenerDatos('business', newsContry)
                // dispatch(setDataTechnology(dataTechnology))
                // dispatch(setDataBusiness(dataBusiness))
            }
        }
        fetchData();


    }, [numberPagination]);


    return (
        <ul className={styles.pagination}>
            <li></li>
            <li onClick={() => setNumberPagination(1)}>1</li>
            <li onClick={() => setNumberPagination(2)}>2</li>
            <li onClick={() => setNumberPagination(3)}>3</li>
            <li onClick={() => setNumberPagination(4)}>4</li>
            <li></li>
        </ul>
    )
};