

interface ProductPriceTagProps {
    productN: string;
    productP: number
}


export default function PriceTag( {productN, productP}: ProductPriceTagProps) {


    return (
        <div className="absolute h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
            <span className="text-sm truncate">{productN}</span>
            <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
                {productP.toLocaleString('pt-PT', {
                    style: 'currency',
                    currency: 'EUR',
                    maximumFractionDigits: 0,
                    minimumFractionDigits: 0
                })}</span>
        </div>
    )
}