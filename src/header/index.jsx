import "./index.css";

const Header = () => {

    return (
        <ul>
            <li> <a className="active" href="#">Home</a> </li>
            <li> <a href="#">Usuarios</a> </li>
            <li> <a href="#">Clientes</a> </li>
            <li> <a href="#">Relatórios</a> </li>
            <li> <a href="#">Sair</a> </li>
        </ul>
    )
}

export default Header;