import { Input, Div, Button } from "atomize";
import { useForm, Controller } from "react-hook-form";

function CheckoutForm({ handelSetFormData }) {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    handelSetFormData(data);
  };

  return (
    <Div style={{ margin: "0 auto" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Div p={{ xs: "1rem" }} m={{ b: "0.5rem" }} rounded="xl" bg="white">
          <Div m={{ y: "1rem" }}>
            {/* <Text>Họ và tên:</Text> */}
            {/* register your input into the hook by invoking the "register" function */}
            <Controller
              name="name"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input {...field} placeholder="Họ và tên" h="2.5rem" />
              )}
              rules={{
                required: true,
              }}
            />
            {errors.name && <span>This field is required</span>}
          </Div>
          <Div m={{ y: "1rem" }}>
            <Controller
              name="phone"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input {...field} placeholder="Nhập số điện thoại" h="2.5rem" />
              )}
              rules={{
                required: true,
              }}
            />
            {errors.phone && <span>This field is required</span>}
          </Div>

          <Div m={{ y: "1rem" }}>
            <Controller
              name="address"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input {...field} placeholder="Số nhà, căn hộ" h="2.5rem" />
              )}
              rules={{
                required: true,
              }}
            />
            {errors.address && <span>This field is required</span>}
          </Div>
          <Div>
            <Button
              type="submit"
              w="100%"
              h="3rem"
              bg="#40aa54"
              textWeight="800"
            >
              Nhập thông tin
            </Button>
          </Div>
        </Div>
      </form>
    </Div>
  );
}

export default CheckoutForm;
