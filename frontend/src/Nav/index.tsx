import {useLocation} from 'react-router-dom';
import woodpattern3 from '../assets/woodpattern3.png'
import "./index.css"

export default function NavBar() {
    const { pathname } = useLocation();
    return (
        <div className="m-4 ml-6 mb-0">
            <nav 
                className="text-white flex gap-8 text-xl w-fit p-4 rounded nav--background-image" 
                style={{backgroundImage: `url(${woodpattern3})`}}
            >
                <div>LOGO HERE</div>
                <a href="/" className={pathname === "/" ? "nav--link-active" : ""}>My Garden</a>
                <a href="/friends" className={pathname === "/friends" ? "nav--link-active" : ""}>Social Butterfly</a>
                <a href="/profile" className={pathname === "/profile" ? "nav--link-active" : ""}>Profile</a>
            </nav>
        </div>
    )
}