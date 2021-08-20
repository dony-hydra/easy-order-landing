import { useState } from "react";
import { Button, Icon, Text, Div } from "atomize";

import QuantityBtn from "../Button/Quantity";

function CartItem() {
  const [quantity, setQuantity] = useState(0);

  const handelIncrease = () => {
    setQuantity(quantity + 1);
  };
  const handelReduced = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      setQuantity(0);
    }
  };
  return (
    <Div
      m={{ b: "1rem" }}
      bg="white"
      rounded="xl"
      p={{ xs: "0.5rem", sm: "1rem" }}
      d="flex"
      justify="space-between"
    >
      <Div
        bgImg="https://images.unsplash.com/photo-1559963629-38ed0fbd4c86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
        bgSize="cover"
        bgPos="center"
        w="5rem"
      />
      <Div
        //   minW="235px"
        p={{ xs: "0.3rem", sm: "0.5rem" }}
      >
        <Text tag="p" textWeight="600" p={{ xs: "0.3rem", sm: "0.5rem" }}>
          Dưa chuột baby (Dưa leo baby)
        </Text>
        <Div
          d="flex"
          justify="space-between"
          p={{ xs: "0.3rem", sm: "0.5rem" }}
        >
          <Text tag="p" textColor="danger700" textWeight="700">
            21,000 đ
          </Text>
          <QuantityBtn
            handelIncrease={handelIncrease}
            handelReduced={handelReduced}
            quantity={quantity}
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
        onClick={() => {
          console.log("1");
        }}
      >
        <Icon name="Cross" size="10px" />
      </Div>
    </Div>
  );
}

export default CartItem;
