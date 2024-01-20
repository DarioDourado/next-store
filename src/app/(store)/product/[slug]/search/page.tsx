

import { api } from "@/app/api/data/api";
import { Product } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

interface SearchProps {
    searchParams: {
        searchquery: string;
    }
}

async function getSearchProducts(query: string): Promise<Product[]> {

    // Query á db, devemos usar um trycatch

    const response = await api(`/products/search?searchquery=${query}`, {
        next: {
            revalidate: 60 * 60 // 60 minutes
        }
    });

    const products = await response.json();
    //console.log(products)

    return products
}



export default async function Search ({ searchParams }: SearchProps){
    const { searchquery : query } = searchParams

    // Validação, caso n exista
    if (!query) {
        redirect('/')
    }

    const products = await getSearchProducts(query)

    return (
        <div className="flex flex-col gap-4">
            <p className="text-sm">
                Resultados para <span className="font-semibold">{query}</span>
            </p>
            <div className="grid grid-cols-3 gap-6">
            
                { products.map( (product) => (
                <Link 
                    key={product.id}    
                    href={`/product/${product.slug}`}
                    className="group relative rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
                >
                    <Image src={`${product.image}`}
                    className="group-hover:scale-105 transition-transform duration-500"
                    width={780}
                    height={780}
                    quality={100}
                    alt={`${product.slug}`}
                    />
                    <div className="absolute bottom-10 h-10 flex items-center gap-2 max-w-[380px] rounded-full border-2 border-zinc-500 bg-black/68">
                        <span className="text-sm truncate p-2">{product.title}</span>
                        <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
                            {product.price.toLocaleString('pt-PT', {
                                style: 'currency',
                                currency: 'EUR',
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 0
                            })}
                        </span>
                    </div>
                </Link>
                )) }

            </div>
        </div>
    )
}