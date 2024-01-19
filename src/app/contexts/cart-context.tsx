'use client' // 99% dos meus contextos são client component

/** Context
 * 1 - Criar Interfaces
 * 2 - Criar Context Type 
 * 3 - 99% das xs o provider vai enviar / Provider (providenciar) um children e teremos que criar o interface para o children tb com ReactNode.
 * 4 - Criar um context usand o creatContext() do Next
 * 5 - Exportar a função que pretendemos
 */

import { ReactNode, createContext, useContext, useState } from "react";

interface CartItems {
    productId: number;
    quantity: number;
}

interface CartContextType {
    items: CartItems[]; // Começa com um Array Vazio
    addToCart: (productId: number) => void;  // função addToCart que envia um productId e não retorna nada
}

interface CartProviderProps {
    children: ReactNode
}

const CartContext = createContext({} as CartContextType)

export function CartProvider( { children }: CartProviderProps) {

    const [cartItems, setCartItems] = useState<CartItems[]>([])

    function addToCart(productId: number) {
        setCartItems((state) => {
            const productInCart = state.some((item) =>item.productId === productId) // Procura se no carrrinho aquele produto já existe.
            // Se existir, iterar pelo items que estão em state
            if(productInCart) {
                return state.map((item) => {
                    if (item.productId === productId) {
                        return {...item, quantity: item.quantity + 1}
                    }
                    return item
                })
            }
            else {
                return [...state, {productId, quantity: 1}]
            }
        })
    }

    return (
        <CartContext.Provider 
        value={{
            items: cartItems,
            addToCart
        }}
        >

            {children}

        </CartContext.Provider>

    )
}

export const useCart = () => useContext(CartContext) // Exportar um hook e usamos este Custom hook 