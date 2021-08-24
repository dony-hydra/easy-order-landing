import { useEffect, useState, useContext } from "react";
import { Container, Row, Col, Div } from "atomize";

import ProductCart from "../../components/ProductCart";
import Header from "../../components/layout/Header";
import Cart from "../../components/Cart";

import ShopContext from "../../context/ShopContext";

import { get } from "../../service/RestClient";

function HomePage() {
  const { products, setListProduct, cart } = useContext(ShopContext);
  //   const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getListProduct() {
      let response = await get("/products");
      response = await response.data;
      setListProduct(response);
    }
    getListProduct();
  }, []);

  useEffect(() => {
    // setListProduct(products);
  }, [cart]);

  //   console.log("products -->", products);

  return (
    <Div>
      <Header />
      <Div p={{ t: "1rem" }}>
        <Container>
          <Row>
            {products.map((e, i) => (
              <Col size={{ xs: "6", md: "3" }} key={i}>
                <ProductCart
                  item={e}
                  title={e?.title}
                  price={e?.price}
                  image={e?.image}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </Div>
      <Cart />
    </Div>
  );
}

export default HomePage;
