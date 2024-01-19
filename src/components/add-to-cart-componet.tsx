'use client'

import { useCart } from '../app/contexts/cart-context';

interface AddToCartButtonProps {
    productId: number
}

export default function AddToCartButton( { productId }: AddToCartButtonProps ) {

    const { addToCart } = useCart() // vindo do context

    function handleAddProductToCart() {
        addToCart(productId)
    }

    return (
        <button 
            type="button" 
            className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white p-4"
            onClick={handleAddProductToCart}
            >
            Adicionar ao Carrinho
        </button>
    )
}