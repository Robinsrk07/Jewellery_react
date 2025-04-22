import { Link, useLocation } from "react-router"

const BreadCrump =()=>{
    const location = useLocation()
    const pathnames = location.pathname.split("/")
    console.log(pathnames);
    
return (<div>


</div>)
}
export default BreadCrump