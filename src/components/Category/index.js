import { Div, Icon, Button, Text } from "atomize";

function CategoryList() {
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
          <Button
            h="2.5rem"
            w="2.5rem"
            bg="danger300"
            hoverBg="danger400"
            rounded="lg"
            m={{ r: "1rem" }}
            style={{ margin: "0 auto" }}
          >
            <Icon name="HeartSolid" size="20px" color="danger700" />
          </Button>
          <Text>Rau sach</Text>
        </Div>
      ))}
    </Div>
  );
}

export default CategoryList;
