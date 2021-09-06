import { Div, Button, Icon, Text } from "atomize";
import { useHistory } from "react-router-dom";

const DetailLayout = ({ children, title }) => {
  let history = useHistory();
  const handlePrevious = () => {
    history.push({
      pathname: "/",
      state: {
        isShowCart: true,
      },
    });
  };
  return (
    <Div bg="gray200" minH="100vh">
      <Div
        p={{ xs: "1rem" }}
        pos="fixed"
        w="100%"
        bg="white"
        d="flex"
        style={{ zIndex: "9999" }}

        // style={{ borderBottom: "1px solid #c9ced6" }}
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
          {/* {step > 1 ? (
            <Icon name="LeftArrow" size="20px" />
          ) : ( */}
          <Icon name="LeftArrow" size="20px" />
          {/* )} */}
        </Button>
        <Text
          textSize="title"
          textAlign="center"
          d="block"
          w="100%"
          style={{ lineHeight: "30px" }}
        >
          {title ?? ""}
        </Text>
      </Div>
      <Div p="1rem" maxW="600px" m="0 auto">
        <Div m={{ t: "65px" }}>{children}</Div>
      </Div>
    </Div>
  );
};

export default DetailLayout;
