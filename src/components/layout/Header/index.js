import { useState } from "react";
import {
  Div,
  Input,
  Icon,
  Container,
  Row,
  Col,
  Text,
  Tag,
  Collapse,
} from "atomize";

function Header() {
  const [showtag, setShowTag] = useState(false);
  return (
    <Div
      bg="#ffd400"
      d="flex"
      shadow="3"
      align="center"
      p={{ t: "0.5rem", b: "1rem" }}
    >
      <Container>
        <Row>
          <Col size="12">
            <Text textSize="title" m={{ b: "0.5rem" }} textWeight="900">
              Store
            </Text>
          </Col>
          <Col ize="12">
            <Input
              placeholder="Bạn tìm gì hôm nay ?"
              bg="white"
              h="2.5rem"
              rounded="xl"
              shadow="4"
              color="white"
              border="0"
              onBlur={() => {
                setShowTag(false);
              }}
              onFocus={() => {
                setShowTag(true);
              }}
              suffix={
                <Icon
                  name="Search"
                  size="20px"
                  cursor="pointer"
                  onClick={() => console.log("clicked")}
                  pos="absolute"
                  top="50%"
                  right="1rem"
                  transform="translateY(-50%)"
                />
              }
            />
          </Col>
          <Col size="12">
            <Collapse isOpen={showtag}>
              <Div d="flex" flexWrap="wrap" p={{ t: "1rem" }}>
                {["Thịt", "Cá", "Bia", "Đồ da dụng", "Combo"].map((name) => (
                  <Tag
                    bg={`warning100`}
                    textColor="gray500"
                    p={{ x: "0.75rem", y: "0.25rem" }}
                    m={{ r: "0.5rem", b: "0.5rem" }}
                    textSize="body"
                    rounded="xl"
                    shadow="3"
                    transition
                  >
                    {name}
                  </Tag>
                ))}
              </Div>
            </Collapse>
          </Col>
        </Row>
      </Container>
    </Div>
  );
}

export default Header;
