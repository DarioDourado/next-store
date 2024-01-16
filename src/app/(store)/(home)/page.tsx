import { api } from "@/app/api/data/api";
import PriceTag from "@/components/pricetag-component";
import { Product } from "@/types/types";
import Image from "next/image";
import Link from "next/link";


async function getFeactureProducts (): Promise<Product[]> {
  const response = await api('/products/feactured', {
    // Cache
    next: {
      revalidate: 60 * 60 // Taxa de atualização = 1h ()
    }
  })

  const products = await response.json()

  return products
}

export default async function Home() {

  const [highLightedProducts, ...otherProducts] = await getFeactureProducts()

  return (
    <main className="grid max-h[860px] grid-cols-9 grid-flow-row-6 gap-6">
      <Link href={`/product/${highLightedProducts.slug}`} className="col-span-6 row-span-6 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end">
        <Image
        className="group-hover:scale-105 transition-transform duration-500"
        alt={highLightedProducts.tittle}
        src={highLightedProducts.image}
        width={920}
        height={920}
        quality={100}
        />
        <PriceTag 
        
        />
      </Link>
      {otherProducts.map(product => (
        <Link key={product.id} href={`/product/${product.slug}`} className="col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end">
        <Image
          className="group-hover:scale-105 transition-transform duration-500"
          alt={product.tittle}
          src={product.image}
          width={920}
          height={920}
          quality={100}
          />
          <PriceTag />
      </Link>
      ))}
</main>
  )
}
