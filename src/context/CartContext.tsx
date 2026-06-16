import { createContext, useContext, useState } from "react";

// Shape of one item in the cart
interface CartItem {
  id: number;
  name: string;
  price: number;
  seller: string;
  image: string;
  quantity: number;
}

// Shape of the cart tools we want available everywhere
interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
}

// Creates the cart context
const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  // Stores all cart items
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Adds an item to the cart
  const addToCart = (item: Omit<CartItem, "quantity">) => {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        return currentItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }

      return [...currentItems, { ...item, quantity: 1 }];
    });
  };

  // Adds 1 to quantity
  const increaseQuantity = (id: number) => {
    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Removes 1 from quantity, but never goes below 1
  const decreaseQuantity = (id: number) => {
    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Removes item completely
  const removeFromCart = (id: number) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.id !== id)
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Custom hook so screens can use cart tools
export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}