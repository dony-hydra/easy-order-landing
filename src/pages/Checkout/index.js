import { Icon, Div, Button, Text } from "atomize";

import InfoForm from "../../components/Form/Info";
import PaymentMethodForm from "../../components/Form/PaymentMethod";
import InfoOrder from "../../components/InfoOrder";
function Checkout() {
  return (
    <Div bg="gray100">
      <Div
        p={{ xs: "1rem" }}
        m={{ b: "1rem" }}
        bg="white"
        d="flex"
        // border="1px solid"
        // borderColor="gray600"
        style={{ borderBottom: "1px solid #c9ced6" }}
      >
        <Button
          h="2rem"
          w="2rem"
          p={{ x: "0.75rem" }}
          textSize="caption"
          textColor="info700"
          hoverTextColor="info900"
          bg="white"
          hoverBg="info200"
          borderColor="info700"
          hoverBorderColor="info900"
        >
          <Icon name="LeftArrow" size="20px" />
        </Button>
        <Text
          tag="h3"
          textWeight="800"
          textAlign="center"
          d="block"
          w="100%"
          style={{ lineHeight: "30px" }}
        >
          Xác nhận đơn hàng
        </Text>
      </Div>
      <Div p={{ xs: "1rem" }}>
        <InfoForm />
        <PaymentMethodForm />
        <InfoOrder />
      </Div>
    </Div>
  );
}

export default Checkout;
