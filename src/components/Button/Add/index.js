import { useState, useContext, useEffect } from "react";
import { Button, Text } from "atomize";

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
          textColor="info700"
          hoverTextColor="info900"
          border="1px solid"
          borderColor="info700"
          hoverBorderColor="info900"
          m={{ r: "0.5rem" }}
          w="100%"
          bg="info300"
          hoverBg="info400"
          rounded="lg"
          onClick={handleAdd}
          cursor="pointer"
        >
          {/* <Icon name="Bag" size="15px" color="info700" /> */}
          <Text textWeight="700" size="1rem" m={{ l: "0.5rem" }}>
            Thêm
          </Text>
        </Button>
      )}
    </>
  );
}

export default AddButton;
