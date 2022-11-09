import React from "react";
import logo from '../../assents/logoWalmart.png';
import "./Footer.css";

const Footer =() => {
   return (
<>


<div className="mt-5 pt-5 pb-5 footer bg-dark">
<div className="container" >
  <div className="row">
    <div className="col-lg-5 col-xs-12 about-company">
	<img src={logo} id="img"/>
      
      <p><a href="#"></a><a href="#"><i className="fa fa-linkedin-square"></i></a></p>
    </div>
    <div className="col-lg-3 col-xs-12 links none" >
      <h4 className="mt-lg-0 mt-sm-3">Links</h4>
        <ul className="m-0 p-0" id="list">
          <li> <a href="https://github.com/Yuri-Ramos/WalMartdaShoppe" target="_blank" id="letrafooter">Quem Somos</a></li>
          <li> <a href="https://serratec.org/" target="_blank" id="letrafooter">Parceiros</a></li>
          <li> <a href="https://serratec.org/residencia-em-tic/" id="letrafooter" target="_blank">Residência em TIC</a></li>
          <li> <a href="https://news.google.com/home?hl=pt-BR&gl=BR&ceid=BR:pt-419" target="_blank" id="letrafooter">Notícias</a></li>
        </ul>
    </div>
    <div className="col-lg-4 col-xs-12 location">
      <h4 className="mt-lg-0 mt-sm-4">Localização</h4>
      <p>Endereço: Rua Afrânio Melo Franco, 333 – Quitandinha, Petrópolis – RJ, 25651-000</p>
      <p className="mb-0"><i class="fa fa-phone mr-3"></i>(21) 2754-3010</p>
      <p><i className="fa fa-envelope-o mr-3"></i>info@serratec.org.br</p>
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