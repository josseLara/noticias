import styles from './newsPage.module.css';
import Slider_News from '@/components/container/Slider_News';
import Min_Card from '@/components/pure/Min_Card';
import Tag from '@/components/pure/Tag';
import Max_Card from '@/components/pure/Max_Card';

// icons 
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

function NewsPage() {
    return ( 
        <main className={styles.main}>
        {/* 1  */}
        <div className={styles.main__left}>
          <Slider_News />
          {/* left cards */}
          <div className={styles.main__left__cards}>
            {/* {news && news.status != 'error' && news.articles.map((itemNew, index) => <Max_Card key={index} newData={itemNew} number={index} />)} */}
          </div>
          {/* <Pagination /> */}
        </div>
        {/* main right */}
        <div className={styles.main__right}>

          <div className={styles.main__right__title}>
            <h1>Treding News</h1>
            <HiOutlineArrowNarrowRight />
          </div>
          {/* right cards */}
          <div className={styles.main__right__cards}>
            {/* {news && news.status != 'error' && news.articles.slice(0, 3).map((itemNew, index) => <Min_Card key={index} newData={itemNew} number={index} />)} */}

          </div>
          <div className={styles.main__right__title}>
            <h1>Popular Tags</h1>
            <HiOutlineArrowNarrowRight />
          </div>
          {/* right tags */}
          <div className={styles.main__right__tags}>
            {
              // ['Sport', 'Teach', 'Politics', 'News'].map(e => <Tag key={e} txt={e} />)
            }
          </div>

        </div>
      </main>
     );
}

export default NewsPage;