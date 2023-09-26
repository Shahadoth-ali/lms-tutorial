import { Navbar } from "./_components/navbar";
import { Sidebar } from "./_components/sidebar";

const DashboardLayout = ({
    children
}:{
    children:React.ReactNode
}) => {
    return (  
        //parent div
        <div className="h-full">

         {/* first child */}
         <div className="h-[80px] md:pl-56 fixed inset-y-0 w-full z-50">
            <Navbar />

         </div>

            {/* second child div */}
            <div className="hidden
             md:flex
              h-full 
              w-56
               flex-col 
               fixed
                inset-y-0 
                z-50">

           <Sidebar />
            </div>


            {/* third child */}
            <main className="md:pl-56 pt-[80px] h-full">
            {children}
            </main>
          
        </div>
    );
}
 
export default DashboardLayout;