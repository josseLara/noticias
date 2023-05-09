import NavBar from "../NavBar";
import Footer from "../Footer";
import styles from "./layout.module.css";

function Layout( { children } ) {
     return (
        
               <div className={styles.content}>
                    <NavBar  />
                    {children}
                    {/* <Footer/> */}
               </div>
     );
}

export default Layout;