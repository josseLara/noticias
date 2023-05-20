// import Layout from '@/components/Layout';
// import styles from '../styles/music.module.css';
// import Max_Card from '@/components/pure/Max_Card';
// import Slider_News from '@/components/container/Slider_News';
// import Card_Popular from '@/components/pure/Card_Popular';
// // icons
// import { AiOutlineArrowRight } from 'react-icons/ai';
// import Tag from '@/components/pure/Tag';

// function Music() {
//     return (
//         <Layout>
//             <main className={styles.main}>
//                 <div className={styles.main__left}>
//                     <Slider_News />
//                     {/* left cards */}
//                     <div className={styles.main__left__cards}>
//                         <Max_Card />
//                         <Max_Card />
//                     </div>
//                 </div>
//                 {/* main right */}
//                 <div className={styles.main__right}>
//                     <h1>Popular Singers</h1>
//                     <div className={styles.main__right__popular}>
//                         {[1, 2, 3, 4, 5].map(e => <Card_Popular number={e} key={e} />)}
//                     </div>
//                     <div className={styles.main__right__more}>
//                         <span>See More</span>
//                         <AiOutlineArrowRight />
//                     </div>
//                     {/* right tags */}
//                     <h1 className={styles.main__right__title}>Category Labels</h1>
//                     <div className={styles.main__right__tags}>
//                         {
//                             ['Sport', 'Teach', 'Politics', 'News', 'Design', 'Food', 'style'].map(e => <Tag txt={e} />)
//                         }
//                     </div>
//                 </div>
//             </main>
//         </Layout>
//     );
// }

// export default Music;