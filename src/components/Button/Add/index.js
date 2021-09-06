import { useContext } from "react";
import { Button, Icon, Div } from "atomize";

import QuantityBtn from "../Quantity";

import ShopContext from "../../../context/ShopContext";

function AddButton({ data }) {
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
        <Div w="100%">
          <QuantityBtn
            handelIncrease={handelIncrease}
            handelReduced={handelReduced}
            quantity={data?.quantity ?? 0}
          />
        </Div>
      ) : (
        <Button
          w="40px"
          h="40px"
          textSize="caption"
          textColor="#40aa54"
          hoverTextColor="white"
          border="1px solid"
          borderColor="#40aa54"
          hoverBorderColor="#42c0c0"
          m={{ r: "0.5rem" }}
          bg="#40aa54"
          hoverBg="#40aa54"
          rounded="circle"
          onClick={handleAdd}
          cursor="pointer"
        >
          <Icon name="Plus" size="25px" color="white" hoverColor="white" />
        </Button>
      )}
    </>
  );
}

export default AddButton;
