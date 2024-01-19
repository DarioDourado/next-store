
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CartWidget } from "./cart-widget";

export function Header() {

    return (
    <header className="flex items-center justify-between">
        <div className="flex items-center gap-5">
            <Link href={"/"} className="text-2xl font-extrabol text-white">mystore</Link>
            <form className="felx w-[320px] items-center gar-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700"
            action="">
                <Search className="w-5 h-5 text-zinc-500" />
                <input 
                type="text"
                placeholder="Pesquisar produtos..."
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500"
                />
            </form>

            <CartWidget />
            <Link href="/" className="flex items-center gap-2 hover:underline">
                <span className="text-sm">Conta</span>
                <Image 
                src="https://github.com/jfcpcosta.png" // Nota: Teremos que definir os dominios que poderemos aceitar para poder receber imagens. Caso contrário teremos ERRO. no nextt.config.js
                className="h-6 w-6 rounded-full"
                width={24}
                height={24}
                alt="User Image"
                />
            </Link>
        </div>
    </header>
    )
}