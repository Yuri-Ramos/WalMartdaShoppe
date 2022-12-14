import { Container } from "react-bootstrap";
import banner from "../../assents/banner2.jpg";
import banner1 from "../../assents/banner3.jpg";
import banner2 from "../../assents/bannerEcomerce1.jpg";
import { CardComponent } from "./components/Card/index.jsx";

export const Home = () => {
  return (
    <main className="py-3">
      <Container>
        <div>
          
          
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={banner2} class="d-block w-100" id="Banner" alt="..." height="550px"/>
            </div>
            <div class="carousel-item">
              <img src={banner} class="d-block w-100" id="Banner" alt="..." height="550px"/>
            </div>
            <div class="carousel-item">
              <img src={banner1} class="d-block w-100" id="Banner" alt="..." height="550px"/>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

      </div>
          
          
        <CardComponent/>
      </Container>
      
    </main>
  );
};
