import {Link, Outlet} from 'react-router-dom'
const Dashboard = () =>{
    return(
        <div>
            Dashboard
            <Link to = 'profile'>Profile</Link>
            <Link to = 'settings'>settings</Link>

        </div>
    )
}
export default Dashboard;