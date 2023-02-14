import NavBar from "../Menu";


function Layout( {children} ) {
     return (
          <div>
               <NavBar/>
               {children}
          </div>
     );
}

export default Layout;