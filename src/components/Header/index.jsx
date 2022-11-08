import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assents/logoWalmart.png";
import "./index.css";

const Header = () => {

    if(useLocation().pathname == "/login") {
        return (<></>);
    }

    return (
    <div>
    
    <nav class="navbar navbar-expand-lg bg-light py-3 shadown-sm">
    <div class="container">
      <a class="navbar-brand fw-bold fs-2 logo " href="#"><img className="img-fluid" id="IMG"src={logo} /></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        
        <ul class="navbar-nav mx-auto fs-3 mb-2 mb-lg-0">
          <li class="nav-item" >
            <a class="nav-link active" aria-current="page" id="Le-menu" href="#">Home</a>
          </li>
          <li class="nav-item">
            <NavLink class="nav-link sucess "  to="/" >Produtos </NavLink>
          </li>
          <li class="nav-item">
            <NavLink to="/" class="nav-link sucess"  >Sobre</NavLink>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="Le-menu" href="#">Contatos</a>
          </li>     
        </ul>
        
          <div className="button btn">
              <a href="" className="btn btn-outline-dark">
              <i className="fa fa-sign-in me-1"></i> login
              </a>
  
          </div>
          <div className="button btn">
              <a href="" className="btn btn-outline-dark">
              <i className="fa fa-shopping-cart me-1"></i> Carrinho
              </a>
  
          </div>
  
      </div>
    </div>
  </nav>
      </div>
    );
}

export default Header;