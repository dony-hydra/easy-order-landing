import { useState, useContext, useEffect } from "react";
import { Button, Text, Icon } from "atomize";

import QuantityBtn from "../Quantity";

import ShopContext from "../../../context/ShopContext";

function AddButton({ data }) {
  //   const [isAdd, setIsAdd] = useState(false);
  const { addProductToCart, removeProductFromCart } = useContext(ShopContext);

  const handleAdd = () => {
    // setIsAdd(true);
    addProductToCart({
      ...data,
    });
  };

  const handelIncrease = () => {
    addProductToCart({
      ...data,
    });
  };

  const handelReduced = () => {
    removeProductFromCart(data?.id);
  };

  return (
    <>
      {data?.quantity > 0 ? (
        <QuantityBtn
          handelIncrease={handelIncrease}
          handelReduced={handelReduced}
          quantity={data?.quantity ?? 0}
        />
      ) : (
        <Button
          h="2rem"
          p={{ x: "0.75rem" }}
          textSize="caption"
          textColor="#42c0c0"
          hoverTextColor="white"
          border="1px solid"
          borderColor="#42c0c0"
          hoverBorderColor="#42c0c0"
          m={{ r: "0.5rem" }}
          w="100%"
          //   bg="#42c0c0"
          bg="white"
          hoverBg="#42c0c0"
          rounded="lg"
          onClick={handleAdd}
          cursor="pointer"
        >
          {/* <Icon name="Add" size="20px" color="#42c0c0" hoverColor="white" /> */}
          <Text textWeight="700" size="1rem" m={{ l: "0.5rem" }}>
            Thêm vào giỏ
          </Text>
        </Button>
      )}
    </>
  );
}

export default AddButton;
