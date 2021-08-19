import { useState } from "react";
import { Div, Button, Icon, Text } from "atomize";

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
        <Div flexDir="row" d="flex" justify="space-between" align="baseline">
          <Button
            textSize="caption"
            textColor="info700"
            hoverTextColor="info900"
            border="1px solid"
            borderColor="info700"
            hoverBorderColor="info900"
            bg="info300"
            hoverBg="info400"
            // h="15px"
            // w="15px"
            rounded="circle"
            onClick={handelReduced}
          >
            <Icon name="Minus" size="10px" />
          </Button>
          <Text textWeight="500" size="15px" m={{ l: "0.5rem" }}>
            {quantity}
          </Text>
          <Button
            textSize="caption"
            textColor="info700"
            hoverTextColor="info900"
            border="1px solid"
            borderColor="info700"
            hoverBorderColor="info900"
            bg="info300"
            hoverBg="info400"
            rounded="circle"
            onClick={handelIncrease}
          >
            <Icon name="Plus" size="10px" />
          </Button>
        </Div>
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
        >
          <Icon name="Bag" size="15px" color="info700" />
          <Text textWeight="500" size="15px" m={{ l: "0.5rem" }}>
            Thêm vào giỏ
          </Text>
        </Button>
      )}
    </>
  );
}

export default AddButton;
