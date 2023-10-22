import {useLocation} from 'react-router-dom';
import woodpattern3 from '../assets/woodpattern3.png'
import logo from '../assets/Logo.svg'
import "./index.css"

export default function NavBar() {
    const { pathname } = useLocation();
    return (
        <div 
            className="mt-4 mb-0"
        >
            <nav 
                className="text-white flex gap-8 text-xl w-fit p-2 rounded nav--background-image flex items-center w-full" 
                style={{backgroundImage: `url(${woodpattern3})`}}
            >
                <div className="p-2 bg-white rounded-lg"><img src={logo} className="w-8"/></div>
                <a href="/" className={pathname === "/" ? "nav--link-active" : ""}>My Garden</a>
                <a href="/friends" className={pathname === "/friends" ? "nav--link-active" : ""}>Social Butterfly</a>
                <a href="/profile" className={pathname === "/profile" ? "nav--link-active" : ""}>Profile</a>
            </nav>
        </div>
    )
}