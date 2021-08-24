import { Input, Dropdown, Anchor, Div, Button, Col, Text } from "atomize";
import { useState } from "react";
import { useForm } from "react-hook-form";

const menuList = (
  <Div p={{ xs: "0.5rem" }}>
    {["Option 1", "Option 2", "Option 3"].map((name, index) => (
      <Anchor d="block" p={{ y: "0.25rem" }}>
        {name}
      </Anchor>
    ))}
  </Div>
);

function CheckoutForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [showDropdownCity, setShowDropdownCity] = useState(false);
  const [showDropdownDist, setShowDropdownDist] = useState(false);
  const [showDropdownWard, setShowDropdownWard] = useState(false);

  const onSubmit = (data) => console.log(data);

  return (
    <Div>
      <Text textSize="subheader" textWeight="500" m={{ b: "0.5rem" }}>
        Thông tin người nhận hàng
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Div
          shadow="2"
          p={{ xs: "1rem" }}
          m={{ b: "0.5rem" }}
          rounded="md"
          bg="white"
        >
          <Div m={{ y: "1rem" }}>
            {/* <Text>Họ và tên:</Text> */}
            {/* register your input into the hook by invoking the "register" function */}
            <Input
              {...register("example")}
              placeholder="Họ và tên"
              h="2rem"
              //   bg="gray300"
              //   hoverBg="white"
            />
          </Div>
          <Div m={{ y: "1rem" }}>
            {/* <Text>Số điện thoại:</Text> */}
            {/* include validation with required or other standard HTML validation rules */}
            <Input
              {...register("phone", { required: true })}
              placeholder="Nhập số điện thoại"
              h="2rem"
            />
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}
          </Div>
          <Div m={{ y: "1rem" }}>
            {/* <Text>Địa chỉ</Text> */}
            {/* include validation with required or other standard HTML validation rules */}
            <Input
              {...register("address", { required: true })}
              placeholder="Địa chỉ"
              h="2rem"
            />
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}
          </Div>
          <Div m={{ y: "1rem" }}>
            {/* <Text>Thành phố:</Text> */}
            {/* include validation with required or other standard HTML validation rules */}
            <Dropdown
              isOpen={showDropdownCity}
              onClick={() => setShowDropdownCity(!showDropdownCity)}
              menu={menuList}
              h="2rem"
            >
              Chọn Thành phố
            </Dropdown>
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}
          </Div>
          <Div m={{ y: "1rem" }}>
            {/* <Text>Quận/Huyện:</Text> */}
            {/* include validation with required or other standard HTML validation rules */}
            <Dropdown
              isOpen={showDropdownDist}
              onClick={() => setShowDropdownDist(!showDropdownDist)}
              menu={menuList}
              h="2rem"
            >
              Chọn Quận/Huyện
            </Dropdown>
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}
          </Div>

          <Div m={{ y: "1rem" }}>
            {/* <Text>Phường/Xã:</Text> */}
            {/* include validation with required or other standard HTML validation rules */}
            <Dropdown
              isOpen={showDropdownWard}
              onClick={() => setShowDropdownWard(!showDropdownWard)}
              menu={menuList}
              h="2rem"
            >
              Chọn Phường/Xã
            </Dropdown>
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}
          </Div>
        </Div>

        {/* <Div shadow="2" p={{ xs: "1rem" }} rounded="md" bg="white">
          <Div d="flex" w="100%" align="space-between" m={{ b: "1rem" }}>
            <Div w="100%">
              <Text>Tạm tính</Text>
            </Div>
            <Div>
              <Text textColor="danger700" textWeight="800">
                593,850đ
              </Text>
            </Div>
          </Div>
          <Button type="submit" w="100%" h="2rem">
            Tiến hành thanh toán
          </Button>
        </Div> */}
      </form>
    </Div>
  );
}

export default CheckoutForm;
