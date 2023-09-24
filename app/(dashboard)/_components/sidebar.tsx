import { Logo } from "./logo"
import { SidebarRoutes } from "./sidebar-routes"

export const Sidebar=()=>{
    return(
        //parent div
        <div className="h-full border-r
         flex flex-col overflow-y-auto
          bg-white shadow-sm">

         {/* first child */}
           <div className="p-6">
<Logo />
           </div>

           {/* second child */}
           <div className="flex flex-col 
           w-full">
<SidebarRoutes />
           </div>
        </div>
    )
}