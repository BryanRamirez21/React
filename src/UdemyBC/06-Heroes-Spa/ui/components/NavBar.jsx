import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth';


export const Navbar = () => {

    //* custom hook to help us with navigation
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();

        navigate('/login',{
            replace:true
        });
    }

    const {authState, logout} = useContext(AuthContext);

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={({isActive}) => `nav-item nav-link  ${isActive ?  'active' : ''}`}
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={({isActive}) => `nav-item nav-link  ${isActive ?  'active' : ''}`}
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink 
                        className={({isActive}) => `nav-item nav-link  ${isActive ?  'active' : ''}`}
                        to="/search"
                    >
                        Search
                    </NavLink>
                    
                    
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-info text-primary'>
                        {authState.user?.name}
                    </span>
                    <button 
                        className='nav-item nav-link btn'
                        onClick={handleLogout}
                    >LogOut</button>
                </ul>
            </div>
        </nav>
    )
}