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
  right: 0;
  bottom: 5px;
  width: 320px;
  margin: 1% auto;
  left: 0;
  right: 0;
  display: flex;
  background: #fff;
  min-height: 60px;
  border-radius: 53px;
  display: flex;
  align-items: center;
  padding: 0 15px;
  justify-content: space-between;
  position: fixed;
  z-index: 9;
  box-shadow: 0 0 20px 0 rgb(10 36 81 / 8%);
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
            bg="#42c0c0"
            // hoverBg="info600"
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
  const { cart } = useContext(ShopContext);
  const [showSideDrawer, setShowSideDrawer] = useState(false);
  return (
    <>
      <DivCart d="flex" justify="space-between">
        <Button
          h="2.5rem"
          w="2.5rem"
          bg="#42c0c0"
          //   hoverBg="info600"
          rounded="circle"
          m={{ r: "1rem" }}
          shadow="3"
          hoverShadow="4"
        >
          <Icon name="Bag" size="20px" color="white" />
        </Button>
        <Div>
          <Text>Tổng đơn hàng</Text>
          <Text textWeight="700">{`${sumTotalPrice(cart)} đ`}</Text>
        </Div>
        <Button
          rounded="circle"
          bg="#42c0c0"
          onClick={() => setShowSideDrawer(true)}
        >
          Giỏ hàng
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
