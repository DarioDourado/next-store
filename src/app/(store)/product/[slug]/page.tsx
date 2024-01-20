import { api } from "@/app/api/data/api";
import AddToCartButton from "@/components/add-to-cart-componet";
import { Product, ProductProps } from "@/types/types";
import Image from "next/image";

// // Metadata
// export const metadata: Metadata = {
//   title: {
//     template: '% | My Store',
//     default: 'My Store'
//   }
// }

async function getProduct(slug: string): Promise<Product> {

    // const response = await api(`/products/${slug}`, 
    // {
    //     next: {
    //         revalidate: 60 * 60 // 1h
    //     }
    // }


    const response = await api(`/products/${slug}`)
    const product = await response.json()
    return product
}


// Metadata dinâmica
export async function generateMetadata( { params }: ProductProps) {

    const product = await getProduct(params.slug) // 1ª Chamada.

    return {
        title: product.title
    }
}


// Static Side Generation - Apesar de nos gerar paginas / dados estáticos em cache a melhor tática passa por deixar apenas o "Top products em cache" exp. para podermos gerir bem a nossa cache que é limitada á maquina.
// export async function generateStaticParams() {
//     // return [
//     //     {
//     //         slug: 'Camisola Roxa'

//     //     }
//     // ]

//     const response = await api('/products/featured')
//     const products: Product[] = await response.json()

//     return products.map((product) => ({
//         slug: product.slug
//     }))
// // Rever porque dá erro no map
// }

export default async function ProductPage({ params }: ProductProps) {

    const product = await getProduct(params.slug)
    // NOTA: Este pedido produto já foi feito acima nos metadatas, como tal o Next vai reaproveitar este pedido e não vai fazer mais nenhum, assim mantemos a nossa performace. Conceito MEMORIZING

    
    return (
        <main className="relative grid max-h-[860px] grid-cols-3">
            <div className="col-span-2 overflow-hidden">
                <Image
                    src={product.image}
                    alt={product.title}
                    width={860}
                    height={860}
                    quality={100}
                />
            </div>
            <div className="flex flex-col justify-center px-12">
                <h1 className="text-3xl font-bold leading-tight">{product.title}</h1>
                <p className="mt-2 leading-relaxed text-zinc-400 text-sm" >{product.description}
                </p>
                <div className="mt-8 flex items-center gap-3">
                    <span className="inline-block rounded-full bg-violet-500 px-5 py-2.5 font-semibold">
                        {product.price.toLocaleString('pt-PT', {
                            style: 'currency',
                            currency: 'EUR',
                            maximumFractionDigits: 0,
                            minimumFractionDigits: 0
                        })}
                    </span>
                    <span className="text-sm text-zinc-400">
                        em 12x sem juros de {(product.price / 12).toLocaleString('pt-PT', {
                            style: 'currency',
                            currency: 'EUR',
                            maximumFractionDigits: 0,
                            minimumFractionDigits: 0
                        })}
                    </span>
                </div>
                <div className="mt-8 space-y-4">
                    <span className="block font-semibold">
                        Tamanhos
                    </span>
                    <div className="flex gap-2">
                        <span className="flex gap-2">
                            <button type="button" className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold">S</button>
                            <button type="button" className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold">M</button>
                            <button type="button" className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold">L</button>
                            <button type="button" className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold">XL</button>
                            <button type="button" className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold">XXL</button>
                        </span>
                    </div>
                    <AddToCartButton
                        productId={product.id}
                    />
                </div>
            </div>

        </main>
    )
}