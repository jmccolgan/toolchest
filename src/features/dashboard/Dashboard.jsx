import { 
  Outlet, 
  useLocation 
} from 'react-router-dom';

import { icons } from "../../assets/icons/Icons"

const Dashboard = () => {

  const location = useLocation();

  return (
    <div className="dashboard">
      {location.pathname === '/' && <h1>{icons.tools}</h1>}  
      <Outlet />
    </div>
  )
}

export default Dashboard
