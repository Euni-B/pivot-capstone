import { createContext, useContext, useState } from "react";

// This interface defines the CartItem data model.
//
// TypeScript uses this interface to ensure every item stored
// in the shopping cart contains the required product information
// and a quantity value.
interface CartItem {
  id: number;
  name: string;
  price: number;
  seller: string;
  image: string;
  quantity: number;
}

// This interface defines the structure of the CartContext.
//
// Any component that uses the cart context will have access
// to these state values and functions.
interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
}

// Create a React Context for sharing cart data between components
// without passing props through multiple levels of the application.
const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {

  // React state that stores all products currently in the cart.
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Reset the cart state by replacing the current array with an empty array.
  // This is typically used after a successful checkout.
  const clearCart = () => {
    setCartItems([]);
  };

  // Add a product to the cart.
  //
  // Omit<CartItem, "quantity"> tells TypeScript that the incoming
  // object contains all CartItem properties except quantity.
  // The quantity will be added inside this function.
  const addToCart = (item: Omit<CartItem, "quantity">) => {

    // Functional state update ensures we always work with
    // the most current version of cartItems.
    setCartItems((currentItems) => {

      // The find() array method searches for an existing cart item
      // with the same product id.
      const existingItem = currentItems.find(
        (cartItem) => cartItem.id === item.id
      );

      // If the product already exists in the cart,
      // use map() to create a new array and increase
      // only that item's quantity.
      if (existingItem) {
        return currentItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }

      // If the product is not already in the cart,
      // use the spread operator (...) to create a new array
      // and add the product with a starting quantity of 1.
      return [...currentItems, { ...item, quantity: 1 }];
    });
  };

  // Increase the quantity of a specific cart item by 1.
  //
  // map() creates a new array while updating only the
  // item whose id matches the provided id.
  const increaseQuantity = (id: number) => {
    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrease the quantity of a specific item.
  //
  // The conditional expression prevents quantities
  // from dropping below 1.
  const decreaseQuantity = (id: number) => {
    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Remove an item completely from the cart.
  //
  // filter() creates a new array containing every item
  // except the one whose id matches the provided id.
  const removeFromCart = (id: number) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.id !== id)
    );
  };

  // Provide cart state and cart functions to all components
  // wrapped inside CartProvider.
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Custom hook that provides simplified access to CartContext.
export function useCart() {
  const context = useContext(CartContext);

  // Prevents components from using the cart context
  // unless they are wrapped inside CartProvider.
  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}