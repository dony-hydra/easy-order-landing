import { Div, Text } from "atomize";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import AddButton from "../Button/Add";

const Title = styled.div`
  color: #283a5b;
  font-size: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

function ProductCart({ title, price, image, item }) {
  let history = useHistory();

  const goToDetail = (id) => {
    history.push(`/product/${id}`);
  };

  return (
    <Div
      bg="white"
      rounded="lg"
      overflow="hidden"
      border="0.5px solid"
      borderColor="gray300"
      m={{ b: { xs: "1rem", md: "1rem" } }}
    >
      <Div p="0.5rem" cursor="pointer" onClick={() => goToDetail(item?.id)}>
        <Div
          bgImg={image}
          bgSize="contain"
          bgPos="center"
          bgRepeat="no-repeat"
          h="6rem"
          w="100%"
          //   style={{ backgroundRepeat: "no-repeat" }}
        />
        <Div m={{ t: "0.5rem" }}>
          <Title>{title ?? ""}</Title>
          <Text textSize="subheader" textWeight="700" textColor="#dark">
            {`${price ?? 0} đ`}
          </Text>
        </Div>
      </Div>

      <Div d="flex" justify="end" p={{ t: "0.5rem", b: "0.5rem" }}>
        <AddButton data={item} />
      </Div>
    </Div>
  );
}

export default ProductCart;
