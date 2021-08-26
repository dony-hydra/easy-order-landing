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
      <Div
        d="inline-block"
        textAlign="center"
        align="center"
        overflow="hidden"
        m={{ l: "0.6rem", r: "0.6rem" }}
        p="0.5rem"
        //   h="80px"
        bg="white"
        rounded="xl"
        onClick={() => getListProduct()}
        shadow="3"
      >
        All products
      </Div>

      {categories.map((category, i) => (
        <Div
          d="inline-block"
          textAlign="center"
          align="center"
          key={i}
          overflow="hidden"
          m={{ l: "0.6rem", r: "0.6rem" }}
          p="0.5rem"
          //   h="80px"
          bg="white"
          rounded="xl"
          onClick={() => getProductByCategory(category)}
          shadow="3"
        >
          {category}
        </Div>
      ))}
    </Div>
  );
}

export default CategoryList;
