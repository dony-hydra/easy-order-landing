import { Div, Text, Button } from "atomize";
import { useContext } from "react";
import styled from "styled-components";

import ShopContext from "../../context/ShopContext";

// utils
import { sumTotalPrice } from "../../utils";

const BorderBottom = styled.hr`
  border-top: 2px dashed #f1f2f4;
`;

function InfoOrder({ name, phone, address }) {
  const { cart } = useContext(ShopContext);

  return (
    <Div>
      <Div p={{ xs: "1rem" }} rounded="xl" bg="white">
        {cart.map((e, i) => (
          <Div d="flex" justify="space-between" p={{ y: "0.5rem" }}>
            <Text>
              {`${e?.quantity}`} x {e?.title}
            </Text>
            <Text>{e?.quantity * e?.price}đ</Text>
          </Div>
        ))}

        <BorderBottom />
        <Div d="flex" justify="space-between" p={{ y: "0.5rem" }}>
          <Text>Phí vận chuyển</Text>
          <Text>0đ</Text>
        </Div>
        <Div d="flex" justify="space-between" p={{ y: "0.5rem" }}>
          <Text>Giảm giá</Text>
          <Text textColor="success700">- 0đ</Text>
        </Div>
        <BorderBottom />
        <Div d="flex" justify="space-between" p={{ y: "0.5rem" }}>
          <Text>Thành tiền</Text>
          <Text textWeight="600">{`${sumTotalPrice(cart)} đ`}</Text>
        </Div>
        <Button
          w="100%"
          h="3rem"
          bg="#40aa54"
          shadow="2"
          hoverShadow="4"
          textWeight="800"
          //   onClick={() => (step < totalStep ? handleNextStep() : () => {})}
        >
          Đặt hàng
        </Button>
      </Div>
    </Div>
  );
}

export default InfoOrder;
