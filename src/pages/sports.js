import Layout from '@/components/Layout';
import styles from '../styles/sports.module.css';
import Max_Card from '@/components/pure/Max_Card';
import Slider_News from '@/components/container/Slider_News';
import Sport_Summary from '@/components/pure/Sport_Summary';
import Sport_Math from '@/components/pure/Sport_Match';
import Sport_Liga from '@/components/pure/Sport_Liga';
import { setDataSports } from '@/feactures/datos/datosSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ObtenerDatos } from '@/helpers/FetchNews';

function Sports() {
    const dispatch = useDispatch();
   const typeNews = useSelector(state => state.datos.type)
   const newContry = useSelector(state => state.datos.newsContry)
   const language = useSelector(state => state.datos.language)

    useEffect(() => {

        let fetchData = async ()=>{
          let dataSports = await ObtenerDatos('sports', newContry,language)
       
          dispatch(setDataSports(dataSports))
        }
        fetchData();
    
      }, [typeNews]);

      
    return (
        <Layout>
            <main className={styles.main}>
                <div className={styles.main__left}>
                    <Slider_News />
                    {/* left cards */}
                    <div className={styles.main__left__cards}>
                        {
                            [1,2,3,4,5,6].map(e => <Max_Card type="dataSports" number={e} key={e} />)
                        }
                    </div>
                </div>
                {/* main right */}
                <div className={styles.main__right}>
                    <Sport_Summary />
                    {/* results */}
                    <h1>Today Math</h1>
                    <Sport_Liga/>
                    <div className={styles.main__right__results}>
                       {[1,2,3].map(e => <Sport_Math key={e}  border={e== 3 ? false : true}/>)}
                    </div>
                </div>
            </main>
        </Layout>
    );
}

export default Sports;


// export async function getServerSideProps(context) {
 
//      let dataSports = await ObtenerDatos('sports', 'us')
  
  
//     return {
//       props: {
//         dataSports,
//       },
//     }
  
//   }