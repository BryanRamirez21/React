import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary rounded-3">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">useContext</Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <NavLink to="/" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
                            Home
                        </NavLink>

                        <NavLink to="/login" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
                            Login
                        </NavLink>

                        <NavLink to="/about" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
                            About
                        </NavLink>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
