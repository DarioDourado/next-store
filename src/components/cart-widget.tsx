'use client'

import { useCart } from "@/app/contexts/cart-context"
import { ShoppingBag } from "lucide-react"

export function CartWidget() {
    const { items } = useCart() 

    return (
        <div className="flex items-center gap-4">
            <ShoppingBag className="flex item-center gap-4" />
            <span className="text-sm">Carrinho ({items.length})</span>
        <div className="w-px h4 bg-zinc-700"></div>
    </div>
    )
}