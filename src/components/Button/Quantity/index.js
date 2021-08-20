import { Div, Icon, Button, Text } from "atomize";

function QuantityBtn({ handelReduced, handelIncrease, quantity = 0 }) {
  return (
    <Div textAlign="center">
      <Button
        onClick={handelReduced}
        d="inline-block"
        h="1.5rem"
        bg="gray300"
        hoverBg="gray400"
        rounded="lg"
        shadow="2"
        p={{ x: "0.75rem" }}
      >
        <Icon name="Minus" size="10px" color="gray700" />
      </Button>
      <Text d="inline-block" w="32px" h="25px">
        {quantity}
      </Text>
      <Button
        onClick={handelIncrease}
        d="inline-block"
        h="1.5rem"
        bg="gray300"
        hoverBg="gray400"
        rounded="lg"
        shadow="2"
        p={{ x: "0.75rem" }}
      >
        <Icon name="Plus" size="10px" color="gray700" />
      </Button>
    </Div>
  );
}

export default QuantityBtn;
