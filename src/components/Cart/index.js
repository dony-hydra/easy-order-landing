import { Div, Icon, Button, Text, SideDrawer } from "atomize";
import { useState, useContext } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import ShopContext from "../../context/ShopContext";

// component
import CartItem from "./CartItem";

// utils
import { sumTotalPrice } from "../../utils";

const DivCart = styled.div`
  position: fixed;
  right: 0;
  bottom: 25px;
`;

const BasicSideDrawer = ({ isOpen, onClose }) => {
  let history = useHistory();
  const { cart } = useContext(ShopContext);

  const handelStepPayment = () => {
    history.push("/checkout");
  };

  return (
    <SideDrawer isOpen={isOpen} onClose={onClose} bg="gray200" p={{ xs: "0" }}>
      <Div p={{ xs: "1rem" }} m={{ b: "1rem" }} shadow="3" bg="white" d="flex">
        <Button
          h="2rem"
          p={{ x: "0.75rem" }}
          textSize="caption"
          textColor="info700"
          hoverTextColor="info900"
          bg="white"
          hoverBg="info200"
          borderColor="info700"
          hoverBorderColor="info900"
          m={{ r: "0.5rem" }}
          onClick={onClose}
        >
          <Icon name="Cross" size="20px" />
        </Button>
        <Text
          tag="h1"
          textWeight="800"
          textAlign="center"
          style={{ lineHeight: "30px" }}
        >
          Giỏ hàng của bạn
        </Text>
      </Div>
      <Div p={{ x: "1rem" }} h="75vh" overflow="scroll">
        {/* {[...Array(10)].map((e, i) => ( */}
        {cart.map((e, i) => (
          <CartItem key={i} item={e} />
        ))}
      </Div>
      {cart.length !== 0 && (
        <Div
          p={{ xs: "1rem" }}
          bg="white"
          d="fex"
          w="100%"
          bottom="0"
          pos="absolute"
          shadow="3"
        >
          <Div d="flex" w="100%" align="space-between" m={{ b: "1rem" }}>
            <Div w="100%">
              <Text>Tạm tính</Text>
            </Div>
            <Div w="100%" textAlign="right">
              <Text textColor="danger700" textWeight="800">
                {`${sumTotalPrice(cart)} đ`}
              </Text>
            </Div>
          </Div>
          <Button
            w="100%"
            shadow="2"
            hoverShadow="4"
            bg="info700"
            hoverBg="info600"
            textWeight="700"
            onClick={handelStepPayment}
          >
            Tiếp theo
          </Button>
        </Div>
      )}
    </SideDrawer>
  );
};

function Cart() {
  const [showSideDrawer, setShowSideDrawer] = useState(false);
  return (
    <>
      <DivCart>
        <Button
          h="2.5rem"
          w="2.5rem"
          bg="info700"
          hoverBg="info600"
          rounded="circle"
          m={{ r: "1rem" }}
          shadow="3"
          hoverShadow="4"
          onClick={() => setShowSideDrawer(true)}
        >
          <Icon name="Bag" size="20px" color="white" />
        </Button>
      </DivCart>
      <BasicSideDrawer
        isOpen={showSideDrawer}
        onClose={() => setShowSideDrawer(false)}
      />
    </>
  );
}

export default Cart;
