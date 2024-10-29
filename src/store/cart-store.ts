import { create } from "zustand";
import { Product } from "@/app/interfaces/products-i";

interface CartProduct extends Product {
  quantity: number;
}

interface CartState {
  cart: CartProduct[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, updateType: string) => void;
}

const loadCartFromStorage = (): CartProduct[] => {
  if (typeof window === "undefined") return []; // Ensure we are in a browser environment
  const storedCart = localStorage.getItem("cart");
  return storedCart ? JSON.parse(storedCart) as CartProduct[]: [];
};

const saveCartToStorage = (cart: CartProduct[]) => {
  if (typeof window === "undefined") return; // Ensure we are in a browser environment
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const useCartStore = create<CartState>((set) => ({
  cart: loadCartFromStorage(),

  addToCart: (product) =>
    set((state) => {
      const existingProduct = state.cart.find((item) => item.id === product.id);
      let cart: CartProduct[] = [];
      // eslint-disable-next-line unicorn/prefer-ternary
      if (existingProduct) {
        // Just update the quantity if product already exist in cart
        cart = state.cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      } else {
        // if the product doesn't exist then add a new product with quantity 1
        cart = [...state.cart, { ...product, quantity: 1 }];
      }
      saveCartToStorage(cart);
      return {
        cart: cart,
      };
    }),

  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),

  updateQuantity: (id, updateType) =>
    set((state) => {
      let cart: CartProduct[] = [];
      // eslint-disable-next-line unicorn/prefer-ternary
      if (updateType === "dec") {
        const productToUpdate: CartProduct | undefined = state.cart.find(
          (product) => product.id === id,
        );
        // eslint-disable-next-line unicorn/prefer-ternary
        if (productToUpdate?.quantity === 1) {
          cart = state.cart.filter((item) => item.id !== id);
        } else {
          cart = state.cart.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
          );
        }
      } else {
        cart = state.cart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }
      saveCartToStorage(cart);
      return {
        cart: cart,
      };
    }),
}));
