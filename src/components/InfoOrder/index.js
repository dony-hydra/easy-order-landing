import { Input, Dropdown, Anchor, Div, Button, Col, Text } from "atomize";

function InfoOrder() {
  return (
    <Div>
      <Text textSize="subheader" textWeight="500" m={{ b: "0.5rem" }}>
        Thông tin đơn hàng
      </Text>
      <Div
        shadow="3"
        p={{ xs: "1rem" }}
        m={{ b: "0.5rem" }}
        rounded="md"
        bg="white"
      >
        <Div>
          <Text>Trần Trung - 0973607527</Text>
        </Div>
        <Div>
          <Text>
            269 Liên Phường, phường Phước Long B, Tp Thủ Đức, Tp Hồ Chí Minh
          </Text>
        </Div>
      </Div>

      <Div shadow="3" p={{ xs: "1rem" }} rounded="md" bg="white">
        <Div d="flex" justify="space-between" p={{ y: "0.5rem" }}>
          <Text>1 x Dưa leo</Text>
          <Text>10.000đ</Text>
        </Div>
        <Div d="flex" justify="space-between" p={{ y: "0.5rem" }}>
          <Text>1 x Dưa leo</Text>
          <Text>10.000đ</Text>
        </Div>
        <hr />
        <Div d="flex" justify="space-between" p={{ y: "0.5rem" }}>
          <Text>Phí vận chuyển</Text>
          <Text>10.000đ</Text>
        </Div>
        <Div d="flex" justify="space-between" p={{ y: "0.5rem" }}>
          <Text>Giảm giá</Text>
          <Text textColor="success700">10.000đ</Text>
        </Div>
        <hr />
        <Div d="flex" justify="space-between" p={{ y: "0.5rem" }}>
          <Text textWeight="700">Thành tiền</Text>
          <Text textWeight="700">120.000đ</Text>
        </Div>
      </Div>
    </Div>
  );
}

export default InfoOrder;
