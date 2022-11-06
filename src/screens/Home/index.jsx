import { Container } from "react-bootstrap";
import { CardComponent } from "./components/Card/index.jsx";

export const Home = () => {
  return (
    <main className="py-3">
      <Container>
        <h1>Produtos</h1>
        <CardComponent/>
      </Container>
      
    </main>
  );
};
