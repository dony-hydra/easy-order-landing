import { Input, Div, Button, Text } from "atomize";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import axios from "axios";

function CheckoutForm({ handleNextStep, handelSetFormData }) {
  const {
    handleSubmit,
    control,
    getValues,
    formState: { errors },
  } = useForm();

  const [city, setCity] = useState([]);
  const [dist, setDist] = useState([]);
  const [ward, setWard] = useState([]);

  const handelGetCity = () => {
    axios
      .get("https://provinces.open-api.vn/api/")
      .then(function (response) {
        // handle success
        setCity(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };
  const handelGetDist = (code) => {
    axios
      .get(`https://provinces.open-api.vn/api/p/${code}`, {
        params: {
          depth: 2,
        },
      })
      .then(function (response) {
        // handle success
        console.log(response.data);
        setDist(response?.data?.districts);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  const handelGetWard = (code) => {
    setWard([]);
    axios
      .get(`https://provinces.open-api.vn/api/d/${code}`, {
        params: {
          depth: 2,
        },
      })
      .then(function (response) {
        // handle success
        setWard(response?.data?.wards);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  const onSubmit = (data) => {
    handelSetFormData(data);
    handleNextStep();
  };

  return (
    <Div maxW="600px" style={{ margin: "0 auto" }}>
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
            <Controller
              name="name"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input {...field} placeholder="Họ và tên" h="2rem" />
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
                <Input {...field} placeholder="Nhập số điện thoại" h="2rem" />
              )}
              rules={{
                required: true,
              }}
            />
            {errors.phone && <span>This field is required</span>}
          </Div>
          <Div m={{ y: "1rem" }}>
            <Controller
              name="city"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  placeholder="Chọn Thành phố"
                  onFocus={() => {
                    handelGetCity();
                  }}
                  getOptionLabel={(option) => option.name}
                  getOptionValue={(option) => option.codename}
                  options={city}
                />
              )}
              rules={{
                required: true,
              }}
            />
            {/* errors will return when field validation fails  */}
            {errors.city && <span>This field is required</span>}
          </Div>
          <Div m={{ y: "1rem" }}>
            <Controller
              name="dist"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  onFocus={() => {
                    const citySelect = getValues("city");
                    handelGetDist(citySelect?.code);
                  }}
                  placeholder="Chọn Quận/Huyện"
                  getOptionLabel={(option) => option.name}
                  getOptionValue={(option) => option.codename}
                  options={dist}
                />
              )}
              rules={{
                required: true,
              }}
            />
            {/* errors will return when field validation fails  */}
            {errors.dist && <span>This field is required</span>}
          </Div>
          <Div m={{ y: "1rem" }}>
            <Controller
              name="ward"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  placeholder="Chọn Phường/Xã"
                  onFocus={() => {
                    const distSelected = getValues("dist");
                    handelGetWard(distSelected.code);
                  }}
                  getOptionLabel={(option) => option.name}
                  getOptionValue={(option) => option.codename}
                  options={ward}
                />
              )}
              rules={{
                required: true,
              }}
            />
            {/* errors will return when field validation fails  */}
            {errors.dist && <span>This field is required</span>}
          </Div>
          <Div m={{ y: "1rem" }}>
            {/* <Text>Họ và tên:</Text> */}
            {/* register your input into the hook by invoking the "register" function */}
            <Controller
              name="address"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="Số nhà, căn hộ, tên đường"
                  h="2rem"
                />
              )}
              rules={{
                required: true,
              }}
            />
            {errors.address && <span>This field is required</span>}
          </Div>
          <Div>
            <Button type="submit" w="100%" h="2rem" bg="#42c0c0">
              Tiến hành thanh toán
            </Button>
          </Div>
        </Div>
      </form>
    </Div>
  );
}

export default CheckoutForm;
