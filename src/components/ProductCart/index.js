import { Div, Button, Text } from "atomize";

import AddButton from "../Button/Add";

function ProductCart() {
  return (
    <Div
      //   h="15rem"
      rounded="lg"
      //   textColor="medium"
      overflow="hidden"
      border="1px solid"
      borderColor="#EAEAEA"
      m={{ b: { xs: "1rem", md: "1rem" } }}
    >
      <Div
        bgImg="https://images.unsplash.com/photo-1559963629-38ed0fbd4c86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
        bgSize="cover"
        bgPos="center"
        h="10rem"
        w="100%"
      />
      <Div p="0.5rem">
        <Div>
          <Text tag="p" textWeight="700">
            Nấm kim châm ớt hiểm
          </Text>
          <Text tag="p" textColor="danger700" textWeight="700">
            31.500 đ
          </Text>
        </Div>
        <Div align="center" p={{ t: "0.5rem" }}>
          <AddButton />
        </Div>
      </Div>
    </Div>
  );
}

export default ProductCart;
