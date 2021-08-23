import {
  Input,
  Dropdown,
  Anchor,
  Div,
  Button,
  Col,
  Text,
  Label,
  Checkbox,
} from "atomize";

function PaymentMethodForm() {
  return (
    <Div m={{ t: "1rem", b: "1rem" }}>
      <Text textSize="subheader" textWeight="500" m={{ b: "0.5rem" }}>
        Chọn phương thức thanh toán
      </Text>
      <Div shadow="3" p={{ xs: "1rem" }} rounded="md" bg="white">
        <Div bg="white">
          <Label align="center" textWeight="600" m={{ b: "0.5rem" }}>
            <Checkbox
              onChange={(e) => {}}
              checked={true}
              inactiveColor="success400"
              activeColor="success700"
              size="24px"
            />
            Thanh toán khi giao hàng (COD)
          </Label>
          <Text>Bạn chỉ phải thanh toán khi nhận được hàng</Text>
        </Div>
      </Div>
    </Div>
  );
}

export default PaymentMethodForm;
