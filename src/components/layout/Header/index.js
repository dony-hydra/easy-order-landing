import { Div, Button, Icon, Text, Container, Row, Col } from "atomize";

function Header() {
  return (
    <Div align="center" p={{ y: "1.5rem" }}>
      <Container>
        <Row>
          <Col>
            <Div d="flex" justify="space-between">
              <Div>
                <Button
                  h="2.5rem"
                  w="2.5rem"
                  rounded="circle"
                  bg="gray300"
                  hoverBg="info400"
                >
                  <Icon
                    name="Store"
                    size="20px"
                    cursor="pointer"
                    onClick={() => console.log("clicked")}
                    color="#40aa54"
                  />
                </Button>
              </Div>
              <Div p={{ x: "1rem" }}>
                <Text textSize="tiny">Khu vực giao hàng:</Text>
                <Div>
                  <Text textWeight="700" cursor="pointer">
                    Thủ Thiêm Garden
                    <Icon
                      name="DownArrow"
                      size="20px"
                      style={{ verticalAlign: "sub" }}
                      color="#40aa54"
                    />
                  </Text>
                </Div>
              </Div>
              <Div>
                <Button
                  h="2.5rem"
                  w="2.5rem"
                  rounded="circle"
                  bg="gray300"
                  hoverBg="info400"
                >
                  <Icon
                    name="User"
                    size="20px"
                    cursor="pointer"
                    onClick={() => console.log("clicked")}
                  />
                </Button>
              </Div>
            </Div>
          </Col>
        </Row>
      </Container>
    </Div>
  );
}

export default Header;
