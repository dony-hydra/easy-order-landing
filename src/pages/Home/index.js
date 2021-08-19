import { Container, Row, Col } from "atomize";

import ProductCart from "../../components/ProductCart";

function HomePage() {
  return (
    <Container>
      <Row>
        {[...Array(10)].map((e, i) => (
          <Col size="4" key={i}>
            <ProductCart />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default HomePage;
