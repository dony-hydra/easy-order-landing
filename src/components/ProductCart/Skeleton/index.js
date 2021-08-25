import { Div, Text } from "atomize";
import Skeleton from "react-loading-skeleton";

function ProductCartSkeleton({ title, price, image, item }) {
  return (
    <Div
      rounded="lg"
      overflow="hidden"
      border="1px solid"
      borderColor="#EAEAEA"
      m={{ b: { xs: "1rem", md: "1rem" } }}
    >
      {/* <Skeleton width={100} />
      <Skeleton width={100} height={50} />
      <Skeleton circle={true} height={50} width={50} /> */}
      <Skeleton width="100%" height="10rem" />

      <Div p="0.5rem">
        <Div>
          <Text tag="p" textWeight="700">
            <Skeleton width="100%" />
            <Skeleton width={50} />
          </Text>
          <Text tag="p" textColor="danger700" textWeight="700">
            <Skeleton width={100} />
          </Text>
        </Div>
        <Div align="center" p={{ t: "0.5rem" }}>
          <Skeleton width="100%" height="30px" />
        </Div>
      </Div>
    </Div>
  );
}

export default ProductCartSkeleton;
