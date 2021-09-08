import { useEffect, useContext, useState } from "react";
import { Div, Text, Label, Icon, Button } from "atomize";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import DetailLayout from "../../layout/detailLayout";
import ProductDetailSkeleton from "./Skeleton";

import { get } from "../../service/RestClient";
const BorderBottom = styled.hr`
  border: 1px solid #f1f2f4;
`;

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  let { id } = useParams();

  useEffect(() => {
    async function getListProduct() {
      setLoading(true);
      let response = await get(`/products/${id}`);
      response = await response.data;
      setProduct(response);
      setLoading(false);
    }
    getListProduct();
  }, []);

  if (loading) {
    return (
      <DetailLayout title="Chi tiết sản phẩm" bg="white">
        <ProductDetailSkeleton />
      </DetailLayout>
    );
  }

  return (
    <DetailLayout title="Chi tiết sản phẩm" bg="white">
      <Div>
        <Div bg="white" w="100%" rounded="xl" h="300px">
          <Div
            bgImg={product?.image}
            bgSize="contain"
            bgPos="center"
            h="300px"
            rounded="xl"
            bgRepeat="no-repeat"
          />
        </Div>
        <Div m={{ y: "1rem" }}>
          <Text textSize="title" textWeight="700">
            {product?.title}
          </Text>
          <Text textColor="gray600" textWeight="500" textSize="body">
            Weight 5kg
          </Text>
        </Div>
        <Div d="flex">
          {/* <Text
            textSize="paragraph"
            textWeight="700"
            textColor="gray500"
            textDecor="line-through"
          >
            {`120,000 đ`}
          </Text> */}
          <Text
            textSize="title"
            textWeight="700"
            textColor="#40aa54"
            // m={{ x: "1rem" }}
          >
            {product?.price} $
          </Text>
        </Div>
        <Div m={{ y: "1rem" }}>
          <Text textWeight="700">Product Details</Text>
          <Text textSize="paragraph">
            Any of the utility property can also be passed to Button. Button by
            default is of height h="2.5rem", padding and uses flex to align
            items center. In addition to these loading disabled having booleon
            value can be passed to the button.
          </Text>
        </Div>
        <BorderBottom />
        <Div d="flex" justify="space-between" align="center">
          <Text textWeight="700" textSize="subheader">
            Review
          </Text>
          <Div>
            <Icon color="warning700" name="StarSolid" size="20px" />
            <Icon color="warning700" name="StarSolid" size="20px" />
            <Icon color="warning700" name="StarSolid" size="20px" />
            <Icon color="warning700" name="StarSolid" size="20px" />
            <Icon color="warning700" name="StarSolid" size="20px" />
          </Div>
        </Div>
        <BorderBottom />
        <Div m={{ y: "2rem" }}>
          <Button
            w="100%"
            h="3rem"
            bg="#40aa54"
            shadow="2"
            hoverShadow="4"
            textWeight="800"
          >
            Đặt hàng
          </Button>
        </Div>
      </Div>
    </DetailLayout>
  );
};

export default ProductDetail;
