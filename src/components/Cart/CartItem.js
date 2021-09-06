import { useContext } from "react";
import { Icon, Text, Div } from "atomize";
import styled from "styled-components";

import QuantityBtn from "../Button/Quantity";

import ShopContext from "../../context/ShopContext";

const Title = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

function CartItem({ item }) {
  const { removeProductFromCart, addProductToCart } = useContext(ShopContext);

  const handelIncrease = () => {
    addProductToCart(item);
  };

  const handelReduced = () => {
    removeProductFromCart(item?.id);
  };
  const removeProduct = () => {
    removeProductFromCart(item?.id);
  };

  return (
    <Div
      m={{ b: "1rem" }}
      bg="white"
      rounded="xl"
      p={{ xs: "0.5rem", sm: "1rem" }}
      d="flex"
      justify="space-between"
      border="0.5px solid"
      borderColor="gray300"
    >
      <Div
        bgImg={item?.image}
        bgSize="contain"
        bgPos="center"
        bgRepeat="no-repeat"
        w="5rem"
      />
      <Div
        //   minW="235px"
        p={{ xs: "0.3rem", sm: "0.5rem" }}
      >
        <Text
          tag="p"
          textWeight="600"
          w={{ xs: "250px" }}
          p={{ xs: "0.3rem", sm: "0.5rem" }}
        >
          <Title>{item?.title ?? ""}</Title>
        </Text>
        <Div
          d="flex"
          justify="space-between"
          p={{ xs: "0.3rem", sm: "0.5rem" }}
        >
          <Text tag="p" textColor="danger700" textWeight="700">
            {`${item?.price ?? 0} đ`}
          </Text>
          <QuantityBtn
            handelIncrease={handelIncrease}
            handelReduced={handelReduced}
            quantity={item?.quantity}
          />
        </Div>
      </Div>
      <Div
        h="10px"
        textSize="caption"
        textColor="info700"
        hoverTextColor="info900"
        bg="white"
        textAlign="center"
        onClick={removeProduct}
      >
        <Icon name="Cross" size="10px" />
      </Div>
    </Div>
  );
}

export default CartItem;
