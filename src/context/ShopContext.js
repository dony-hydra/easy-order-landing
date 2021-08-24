import { createContext, useState, useEffect } from "react";

const initialState = JSON.parse(localStorage.getItem("cart")) || [];

const ShopContext = createContext({
  products: [],
  cart: [],
  addProductToCart: (product) => {},
  removeProductFromCart: (productId) => {},
});

const { Provider } = ShopContext;

export const ShopProvider = (props) => {
  const [cart, setCart] = useState(initialState);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart, products]);

  const setListProduct = (products) => {
    mergeProductWithCart(products, cart);
  };

  const mergeProductWithCart = (products, cart) => {
    const list = [...cart, ...products];
    const filter = list.filter(
      (elem, index) => list.findIndex((obj) => obj.id === elem.id) === index
    );
    // const unique = Array.from(new Set(list));
    setProducts(filter);
  };

  const addProductToCart = (product) => {
    // setCart([...cart, product]);
    const updatedCart = [...cart];
    const updatedItemIndex = updatedCart.findIndex(
      (item) => item.id === product.id
    );
    if (updatedItemIndex < 0) {
      updatedCart.push({ ...product, quantity: 1 });
    } else {
      const updatedItem = {
        ...updatedCart[updatedItemIndex],
      };
      updatedItem.quantity++;
      updatedCart[updatedItemIndex] = updatedItem;
    }
    setCart([...updatedCart]);
    mergeProductWithCart(products, updatedCart);
  };

  const updatedProductFromCart = (productId, quantiy) => {};

  const removeProductFromCart = (productId) => {
    // console.log("111", productId);
    // setCart((prevState) => prevState.shift());
    const updatedCart = [...cart];
    const updatedItemIndex = updatedCart.findIndex(
      (item) => item.id === productId
    );
    const updatedItem = {
      ...updatedCart[updatedItemIndex],
    };
    updatedItem.quantity--;
    if (updatedItem.quantity <= 0) {
      updatedCart.splice(updatedItemIndex, 1);
    } else {
      updatedCart[updatedItemIndex] = updatedItem;
    }
    setCart([...updatedCart]);
    mergeProductWithCart(products, updatedCart);
  };

  return (
    <Provider
      value={{
        cart,
        products,
        addProductToCart,
        removeProductFromCart,
        updatedProductFromCart,
        setListProduct,
      }}
    >
      {props.children}
    </Provider>
  );
};

export default ShopContext;
