import { useEffect, useState, useContext } from "react";
import { Div, Icon, Button, Text } from "atomize";

import CategorySkeleton from "./Skeleton";

import { get } from "../../service/RestClient";

import ShopContext from "../../context/ShopContext";

function CategoryList() {
  const [categories, setCatagories] = useState([]);
  const { setListProduct } = useContext(ShopContext);

  useEffect(() => {
    async function getCategories() {
      let response = await get("/products/categories");
      response = await response.data;
      setCatagories(response);
    }
    getCategories();
  }, []);

  const getListProduct = async () => {
    setListProduct([]);
    let response = await get("/products");
    response = await response.data;
    setListProduct(response);
  };

  const getProductByCategory = async (category) => {
    setListProduct([]);
    let response = await get(`/products/category/${category}`);
    response = await response.data;
    setListProduct(response);
  };
  return (
    <Div
      m={{ t: "1em", b: "1rem" }}
      overflow="scroll"
      style={{ whiteSpace: "nowrap" }}
    >
      {categories.length === 0 && <CategorySkeleton />}
      {categories.length !== 0 && (
        <Div
          d="inline-block"
          textAlign="center"
          align="center"
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
            onClick={() => getListProduct()}
          >
            <Icon name="HeartSolid" size="20px" color="danger700" />
          </Button>
          <Text>All</Text>
        </Div>
      )}

      {categories.map((category, i) => (
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
            onClick={() => getProductByCategory(category)}
          >
            <Icon name="HeartSolid" size="20px" color="danger700" />
          </Button>
          <Text>{category}</Text>
        </Div>
      ))}
    </Div>
  );
}

export default CategoryList;
