import { Container, Row, Col, Div } from "atomize";

function Checkout() {
  return (
    <>
      <Div p={{ t: "1rem" }}>
        <Container>
          <Row>
            {/* {[...Array(10)].map((e, i) => (
              <Col size={{ xs: "6", md: "3" }} key={i}>
                <ProductCart />
              </Col>
            ))} */}
          </Row>
        </Container>
      </Div>
    </>
  );
}

export default Checkout;
