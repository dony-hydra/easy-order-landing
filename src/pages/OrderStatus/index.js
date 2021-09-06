import { Div, Text, Label, Icon, Anchor } from "atomize";
import styled from "styled-components";

import DetailLayout from "../../layout/detailLayout";

import imageLocal from "../../assets/image/station_image.png";

const BorderBottom = styled.hr`
  border-top: 1px solid #f1f2f4;
`;

const OrderStatus = () => {
  return (
    <DetailLayout title="Đặt hàng thành công">
      <Div
        shadow="2"
        p={{ xs: "1rem" }}
        m={{ b: "0.5rem" }}
        rounded="md"
        bg="white"
      >
        <Div d="flex">
          <Text textWeight="600">Mã đơn hàng </Text>
          <Text textColor="#42c0c0" textWeight="600" m={{ l: "5px" }}>
            DON.40921-94499
          </Text>
        </Div>
        <BorderBottom />
        <Div d="flex" justify="space-between">
          <Label m={{ b: "0.5rem" }}>
            <Icon name="User" size="25px" m={{ r: "0.5rem" }} color="#42c0c0" />
            Người nhận hàng
          </Label>

          <Text textWeight="500">Mỹ Hạnh</Text>
        </Div>
        <Div d="flex" justify="space-between">
          <Label m={{ b: "0.5rem" }}>
            <Icon
              name="Message"
              size="25px"
              m={{ r: "0.5rem" }}
              color="#42c0c0"
            />
            Số điện thoại
          </Label>
          <Text textWeight="500">0973607527</Text>
        </Div>
        <BorderBottom />
        <Text textWeight="600">Giao hàng tận nơi</Text>
        <BorderBottom />
        <Div m={{ b: "0.5rem" }} d="flex">
          <Icon
            name="Location"
            size="25px"
            m={{ r: "0.5rem" }}
            color="#42c0c0"
          />
          Tháp T1, Chung cư Masteri Thảo Điền, 159 Xa lộ Hà Nội, phường Thảo
          Điền, Quận 2, Thành phố Hồ Chí Minh
        </Div>
        <Div
          bgImg={imageLocal}
          bgSize="cover"
          bgPos="center"
          h="20rem"
          rounded="xl"
        />
      </Div>

      <Div
        shadow="2"
        p={{ xs: "1rem" }}
        m={{ b: "0.5rem" }}
        rounded="md"
        bg="white"
      >
        <Text textAlign="center" textSize="caption" p={{ x: "5rem" }}>
          Vui lòng thông báo cho chúng tôi về bất thay đổi nào về đơn hàng của
          bạn bằng cách gọi
        </Text>
        <Anchor
          h="2.5rem"
          w="100%"
          bg="warning700"
          hoverBg="warning600"
          rounded="xl"
          m={{ y: "1rem" }}
          shadow="2"
          hoverShadow="4"
          textColor="dark"
          textWeight="700"
          d="block"
          textAlign="center"
          style={{ lineHeight: "2.5rem" }}
          href="tel:1900 2604"
        >
          Gọi 1900 2604
        </Anchor>
      </Div>
    </DetailLayout>
  );
};

export default OrderStatus;
