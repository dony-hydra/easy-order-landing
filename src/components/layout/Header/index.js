import { Div, Input, Icon, Container, Row, Col, Text } from "atomize";

import Category from "../../Category";

function Header() {
  return (
    <Div bg="gray200" d="flex" align="center" p={{ t: "1rem", b: "1rem" }}>
      <Container>
        <Row>
          <Col size="12">
            <Text tag="h1" textSize="display1" m={{ b: "0.5rem" }}>
              Danh mục sản phẩm
            </Text>
          </Col>
          <Col ize="12">
            <Input
              placeholder="Search"
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
        </Row>

        <Category />
      </Container>
    </Div>
  );
}

export default Header;
