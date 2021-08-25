import { Icon, Div, Button, Text } from "atomize";
import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import InfoForm from "../../components/Form/Info";
import PaymentMethodForm from "../../components/Form/PaymentMethod";
import InfoOrder from "../../components/InfoOrder";

import ShopContext from "../../context/ShopContext";

// utils
import { sumTotalPrice } from "../../utils";

function Checkout() {
  const totalStep = 2;
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const { cart } = useContext(ShopContext);
  let history = useHistory();

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handelSetFormData = (data) => {
    setFormData({ ...formData, ...data });
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      history.push({
        pathname: "/",
        state: {
          isShowCart: true,
        },
      });
    }
  };

  console.log("formData", formData);
  return (
    <Div bg="gray100">
      <Div
        p={{ xs: "1rem" }}
        pos="fixed"
        w="100%"
        bg="white"
        d="flex"
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
          onClick={handlePrevious}
        >
          {step > 1 ? (
            <Icon name="LeftArrow" size="20px" />
          ) : (
            <Icon name="Cross" size="20px" />
          )}
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
      <Div p={{ xs: "1rem" }} overflow="scroll" h="100vh">
        <Div m={{ t: "65px" }} p={{ b: "10rem" }}>
          {step === 1 && (
            <InfoForm
              handleNextStep={handleNextStep}
              handelSetFormData={handelSetFormData}
            />
          )}
          {step === 2 && (
            <>
              <PaymentMethodForm />
              <InfoOrder
                name={formData?.name || ""}
                phone={formData?.phone || ""}
                address={`${formData?.address}, ${formData?.ward.name}, ${formData?.dist.name}, ${formData?.city.name}`}
              />
            </>
          )}
        </Div>
      </Div>
      <Div
        p={{ xs: "1rem" }}
        bg="white"
        d="fex"
        w="100%"
        bottom="0"
        pos="fixed"
        shadow="3"
      >
        <Div d="flex" w="100%" align="space-between" m={{ b: "1rem" }}>
          <Div w="100%">
            <Text>
              {step < totalStep ? "Tạm tính" : "Tổng tiền (đã có VAT)"}
            </Text>
          </Div>
          <Div w="100%" textAlign="right">
            <Text textColor="danger700" textWeight="800">
              {`${sumTotalPrice(cart)} đ`}
            </Text>
          </Div>
        </Div>
        <Button
          w="100%"
          shadow="2"
          hoverShadow="4"
          bg="info700"
          hoverBg="info600"
          textWeight="700"
          h="2rem"
          onClick={() => (step < totalStep ? handleNextStep() : () => {})}
        >
          {step < totalStep ? "Tiếp theo" : "Đặt hàng"}
        </Button>
      </Div>
    </Div>
  );
}

export default Checkout;
