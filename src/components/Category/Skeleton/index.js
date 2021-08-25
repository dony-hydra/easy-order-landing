import { Div } from "atomize";
import Skeleton from "react-loading-skeleton";

function CategorySkeleton() {
  return (
    <Div
      m={{ t: "1em", b: "1rem" }}
      overflow="scroll"
      style={{ whiteSpace: "nowrap" }}
    >
      {[...Array(12)].map((e, i) => (
        <Div
          d="inline-block"
          textAlign="center"
          align="center"
          key={i}
          overflow="hidden"
          m={{ l: "0.6rem", r: "0.6rem" }}
        >
          <Div>
            <Skeleton width="2rem" height="2rem" />
          </Div>
          <Skeleton width={100} />
        </Div>
      ))}
    </Div>
  );
}

export default CategorySkeleton;
