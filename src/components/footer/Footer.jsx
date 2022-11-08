import React from "react";
import logo from '../../assents/logoWalmart.png';
import "./Footer.css";

const Footer =() => {
   return (
<>


<div class="mt-5 pt-5 pb-5 footer bg-dark">
<div class="container" >
  <div class="row">
    <div class="col-lg-5 col-xs-12 about-company">
	<img src={logo} id="img"/>
      
      <p><a href="#"><i class="fa fa-facebook-square mr-1"></i></a><a href="#"><i class="fa fa-linkedin-square"></i></a></p>
    </div>
    <div class="col-lg-3 col-xs-12 links none" >
      <h4 class="mt-lg-0 mt-sm-3">Links</h4>
        <ul class="m-0 p-0" id="list">
          <li> <a href="#">Quem Somos</a></li>
          <li> <a href="#">Parceiros</a></li>
          <li> <a href="#">Residência em TIC</a></li>
          <li> <a href="#">Notícias</a></li>
          <li> <a href="#">Sed faucibus</a></li>
          <li> <a href="#">Mauris efficitur nulla</a></li>
        </ul>
    </div>
    <div class="col-lg-4 col-xs-12 location">
      <h4 class="mt-lg-0 mt-sm-4">Localização</h4>
      <p>Endereço: Rua Afrânio Melo Franco, 333 – Quitandinha, Petrópolis – RJ, 25651-000</p>
      <p class="mb-0"><i class="fa fa-phone mr-3"></i>(21) 2754-3010</p>
      <p><i class="fa fa-envelope-o mr-3"></i>info@serratec.org.br</p>
    </div>
  </div>
  <div class="row mt-5">
    <div class="col copyright" id="copy">
      <p class=""><small class="tex-white-50" id="">© 2022. Todos os direitos reservados.</small></p>
    </div>
  </div>
</div>
</div>
</>
   )
}
export default  Footer 