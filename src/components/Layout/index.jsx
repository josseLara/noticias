import NavBar from "../Menu";
import Footer from "../Footer";

function Layout( { children } ) {
     return (
        
               <div>
                    <NavBar />
                    {children}
                    <Footer/>
               </div>
     );
}

export default Layout;