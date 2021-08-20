import { useState } from "react";
import { Div, Button, Icon, Text } from "atomize";

import QuantityBtn from "../Quantity";

function AddButton() {
  const [isAdd, setIsAdd] = useState(false);
  const [quantity, setQuantity] = useState(0);

  const handleAdd = () => {
    setIsAdd(true);
    setQuantity(1);
  };

  const handelIncrease = () => {
    setQuantity(quantity + 1);
  };
  const handelReduced = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      setIsAdd(false);
      setQuantity(0);
    }
  };

  return (
    <>
      {isAdd ? (
        <QuantityBtn
          handelIncrease={handelIncrease}
          handelReduced={handelReduced}
          quantity={quantity}
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
