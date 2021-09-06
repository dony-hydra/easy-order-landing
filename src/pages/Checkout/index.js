import { Button, Div, Text, Label, Icon } from "atomize";
import { useState } from "react";
import { useHistory } from "react-router-dom";

import InfoForm from "../../components/Form/Info";
import PaymentMethodForm from "../../components/Form/PaymentMethod";
import InfoOrder from "../../components/InfoOrder";
import DetailLayout from "../../layout/detailLayout";

// import ShopContext from "../../context/ShopContext";

// utils
// import { sumTotalPrice } from "../../utils";

function Checkout() {
  //   const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(null);
  const [edit, setShowEdit] = useState(true);
  let history = useHistory();

  const handelSetCustomer = (data) => {
    setFormData({ ...formData, ...data });
    setShowEdit(false);
  };

  const handelEditInfo = () => {
    setShowEdit(true);
  };

  return (
    <DetailLayout title="Thông tin đơn hàng">
      <Div>
        {edit && <InfoForm handelSetFormData={handelSetCustomer} />}
        {!edit && (
          <Div>
            <Div p={{ xs: "1rem" }} m={{ b: "0.5rem" }} rounded="xl" bg="white">
              <Div>
                <Div d="flex" justify="space-between">
                  <Label m={{ b: "0.5rem" }}>
                    <Icon
                      name="User"
                      size="25px"
                      m={{ r: "0.5rem" }}
                      color="#40aa54"
                    />
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
                      color="#40aa54"
                    />
                    Số điện thoại
                  </Label>
                  <Text textWeight="500">0973607527</Text>
                </Div>
              </Div>
              <Div m={{ b: "0.5rem" }} d="flex">
                <Icon
                  name="Location"
                  size="25px"
                  m={{ r: "0.5rem" }}
                  color="#40aa54"
                />
                Tháp T1, Chung cư Masteri Thảo Điền, 159 Xa lộ Hà Nội, phường
                Thảo Điền, Quận 2, Thành phố Hồ Chí Minh
              </Div>
              <Div d="flex" justify="end">
                <Button
                  h="1.5rem"
                  bg="gray400"
                  onClick={() => handelEditInfo()}
                >
                  Thay đổi
                </Button>
              </Div>
            </Div>
            <Div>
              <InfoOrder name="" phone="" address="" />
            </Div>
          </Div>
        )}
      </Div>
    </DetailLayout>
  );
}

export default Checkout;
