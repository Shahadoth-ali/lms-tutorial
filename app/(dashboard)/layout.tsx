import { Sidebar } from "./_components/sidebar";

const DashboardLayout = ({
    children
}:{
    children:React.ReactNode
}) => {
    return (  
        //parent div
        <div className="h-full">


            {/* first chidl div */}
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
            {children}
        </div>
    );
}
 
export default DashboardLayout;