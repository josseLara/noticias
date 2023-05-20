import NavBar from "../container/NavBar";
import Footer from "../pure/Footer";
import styles from "./layout.module.css";
import Menu_Header from "../container/Menu_Header";

function Layout({ children }) {
     return (

          <div className={styles.content}>
               <NavBar />
               <div className={styles.content__space}>
                    <Menu_Header />
                    {children}
               </div>
               {/* <Footer/> */}
          </div>
     );
}

export default Layout;