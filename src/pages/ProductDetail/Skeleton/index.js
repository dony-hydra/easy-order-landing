import { Div, Text } from "atomize";
import Skeleton from "react-loading-skeleton";

function ProductDetailSkeleton({ title, price, image, item }) {
  return (
    <Div rounded="lg" overflow="hidden" m={{ b: { xs: "1rem", md: "1rem" } }}>
      <Div rounded="xl">
        <Skeleton width="100%" height="300px" />
      </Div>

      <Div p="0.5rem">
        <Div>
          <Text tag="p" textWeight="700">
            <Skeleton width="100%" />
            <Skeleton width="100%" />
          </Text>
          <Text tag="p" textColor="danger700" textWeight="700">
            <Skeleton width={100} />
          </Text>
          <Text tag="p" textColor="danger700" textWeight="700">
            <Skeleton width="100%" />
          </Text>
          <Text tag="p" textColor="danger700" textWeight="700">
            <Skeleton width="100%" />
          </Text>
        </Div>
        <Div align="center" p={{ t: "0.5rem" }}>
          <Skeleton width="100%" height="3rem" />
        </Div>
      </Div>
    </Div>
  );
}

export default ProductDetailSkeleton;
