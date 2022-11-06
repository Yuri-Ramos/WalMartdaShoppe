import "./index.css";
import { Link, useLocation } from "react-router-dom";

const Header = () => {

    if(useLocation().pathname == "/login") {
        return (<></>);
    }

    return (
        <ul>
            <li> <Link className="active" to="/">Home</Link> </li>
            <li> <Link to="/login">Login</Link> </li>
        </ul>
    )
}

export default Header;