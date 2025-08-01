"use client"

import { Product } from "@prisma/client";
import { createContext, useState } from "react";


export interface CartProduct extends Pick<Product, "id" | "name" | "price" | "imageUrl"> {
    quantity: number
}

export interface ICartContext {
    isOpen: boolean;
    products: CartProduct[];
    toggleCart: () => void;
    addProduct: (product: CartProduct) => void;
    totalPrice: number;
    totalQuantity: number;
    decreaseProductQuantity: (productId: string) => void;
    increaseProductQuantity: (productId: string) => void;
    removeProduct: (productId: string) => void;
    clearCart: () => void;
}

export const CartContext = createContext<ICartContext>({
    isOpen: false,
    products: [],
    toggleCart: () => {},
    addProduct: () => {}, 
    totalPrice: 0,
    totalQuantity: 0,
    decreaseProductQuantity: () => {},
    increaseProductQuantity: () => {},
    removeProduct: () => {},
    clearCart: () => {},
})

export const CartProvider = ({children}: {children: React.ReactNode}) => {
    const [products, setProducts] = useState<CartProduct[]>([]);
    const [isOpen, setIsOpen] = useState<boolean>(false);
        
        const toggleCart = () => {
            setIsOpen(prev => !prev)
        }
        const clearCart = () => {
            setProducts([]);
          };

       const addProduct = (product: CartProduct) => {
        // verificar se o produto já está no carrinho
        // se estiver, aumente a sua quantidade
        // se não estiver, o adicione
        const productsIsAlreadyOnTheCart = products.some(prevProduct => prevProduct.id === product.id)
        if (!productsIsAlreadyOnTheCart){
            return setProducts((prev) => [...prev, product])
        }

        setProducts(prevProducts => {
             return prevProducts.map(prevProduct => {
                if (prevProduct.id === product.id){
                    return {
                        ...prevProduct, 
                        quantity: prevProduct.quantity + product.quantity,
                    }
                } 
                return prevProduct;
             })
        })
        }
        
        const decreaseProductQuantity = (productId: string) => {
            setProducts(prevProducts => {
                return prevProducts.map(prevProduct => {
                    if (prevProduct.id !== productId) {
                        return prevProduct;
                    }
                        if (prevProduct.quantity === 1) {
                            return prevProduct;
                        }
                        return {
                            ...prevProduct, 
                            quantity: prevProduct.quantity - 1,
                        }
                }) 
            })
        }

        const removeProduct = (productId: string) => {
            setProducts(prevProducts => prevProducts.filter(product => product.id!== productId))
        }

        const totalPrice = products.reduce((acc, product) => {
            
        return acc + product.price * product.quantity
        }, 0)
        
        const totalQuantity = products.reduce((acc, product) => {
            return acc + product.quantity;
        }, 0);

        const increaseProductQuantity = (productId: string) => {
            setProducts(prevProducts => {
                return prevProducts.map(prevProduct => {
                    if (prevProduct.id !== productId) {
                        return prevProduct;
                    }
                    return {
                         ...prevProduct, 
                        quantity: prevProduct.quantity + 1,
                    }
                }) 
            })
        }
        
        
       
         
    return (
        <CartContext.Provider
         value={{
            isOpen: isOpen, 
            products: products, 
            toggleCart: toggleCart,
            addProduct: addProduct,
            totalPrice: totalPrice,
            totalQuantity: totalQuantity,
            decreaseProductQuantity: decreaseProductQuantity,
            increaseProductQuantity: increaseProductQuantity,
            removeProduct: removeProduct,
            clearCart: clearCart,
        }}
        >
            {children}
        </CartContext.Provider>
    )
}
     