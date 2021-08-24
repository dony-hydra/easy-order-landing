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
    const list = [...products];
    list.forEach((element, index, arr) => {
      const idx = cart.findIndex((e) => e.id === element.id);

      if (idx > -1) {
        arr[index] = cart[idx];
      } else {
        arr[index].quantity = 0;
      }
    });
    setProducts([...list]);
    setCart([...cart]);
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
    mergeProductWithCart(products, updatedCart);
  };

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
    mergeProductWithCart(products, updatedCart);
  };

  return (
    <Provider
      value={{
        cart,
        products,
        addProductToCart,
        removeProductFromCart,
        setListProduct,
      }}
    >
      {props.children}
    </Provider>
  );
};

export default ShopContext;
