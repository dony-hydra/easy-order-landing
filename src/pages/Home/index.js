import { useEffect, useContext } from "react";
import { Container, Row, Col, Div, Text } from "atomize";
import styled from "styled-components";

import ProductCart from "../../components/ProductCart";
import ProductCartSkeleton from "../../components/ProductCart/Skeleton";
import Header from "../../components/layout/Header";
import Cart from "../../components/Cart";
// import Category from "../../components/Category";

import ShopContext from "../../context/ShopContext";

import { get } from "../../service/RestClient";

const WrapHeader = styled.div`
  position: fixed;
  border-radius: 0 0 20px 20px;
  z-index: 999;
  width: 100%;
`;

function HomePage() {
  const { products, setListProduct } = useContext(ShopContext);

  useEffect(() => {
    async function getListProduct() {
      let response = await get("/products");
      response = await response.data;
      setListProduct(response);
    }
    getListProduct();
  }, []);

  return (
    <Div bg="white" p={{ b: "5rem" }} maxW="600px" m="0 auto">
      <Header />
      <Container>
        <Row>
          <Col size="12">
            <Div w="100%" h="10rem" d="block" rounded="xl" bg="gray300"></Div>
          </Col>
        </Row>
        <Row>
          <Col size="12">
            <Text textSize="title" p={{ y: "1rem" }}>
              Sản phẩm
            </Text>
          </Col>
          <>
            {products.length === 0 &&
              [...Array(5)].map((e, i) => (
                <Col size={{ xs: "6", md: "6" }}>
                  <ProductCartSkeleton />
                </Col>
              ))}
          </>

          {products.map((e, i) => (
            <Col size={{ xs: "6", md: "6" }} key={i}>
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
      <Cart />
    </Div>
  );
}

export default HomePage;
