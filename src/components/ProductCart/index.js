import { Div, Text } from "atomize";

import AddButton from "../Button/Add";

function ProductCart({ title, price, image, item }) {
  return (
    <Div
      bg="white"
      rounded="lg"
      overflow="hidden"
      shadow="2"
      //   border="1px solid"
      //   borderColor="#EAEAEA"
      m={{ b: { xs: "1rem", md: "1rem" } }}
    >
      <Div
        bgImg={image}
        bgSize="contain"
        bgPos="center"
        bgRepeat="no-repeat"
        h="10rem"
        w="100%"
      />
      <Div p="0.5rem">
        <Div>
          <Text tag="p" textWeight="700">
            {title ?? ""}
          </Text>
          <Text tag="p" textColor="danger700" textWeight="700">
            {`${price ?? 0} đ`}
          </Text>
        </Div>
        <Div align="center" p={{ t: "0.5rem" }}>
          <AddButton data={item} />
        </Div>
      </Div>
    </Div>
  );
}

export default ProductCart;
