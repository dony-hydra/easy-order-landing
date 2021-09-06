import { Div, Icon, Text } from "atomize";

function QuantityBtn({ handelReduced, handelIncrease, quantity = 0 }) {
  return (
    <Div textAlign="center">
      <Div
        onClick={handelReduced}
        d="inline-block"
        h="2rem"
        bg="white"
        border="0.5px solid"
        borderColor="gray300"
        hoverBg="gray400"
        rounded="lg"
        p={{ x: "0.75rem" }}
        cursor="pointer"
      >
        <Icon
          name="Minus"
          size="15px"
          color="#40aa54"
          d="inline-block"
          style={{ verticalAlign: "middle" }}
        />
      </Div>
      <Text d="inline-block" w="32px" h="25px">
        {quantity}
      </Text>
      <Div
        onClick={handelIncrease}
        d="inline-block"
        h="2rem"
        bg="white"
        border="0.5px solid"
        borderColor="gray300"
        hoverBg="gray400"
        rounded="lg"
        p={{ x: "0.75rem" }}
        cursor="pointer"
      >
        <Icon
          name="Plus"
          size="15px"
          color="#40aa54"
          d="inline-block"
          style={{ verticalAlign: "middle" }}
        />
      </Div>
    </Div>
  );
}

export default QuantityBtn;
