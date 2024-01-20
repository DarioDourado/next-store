
import Image from "next/image";
import Link from "next/link";
import { CartWidget } from "./cart-widget";
import { SearchForm } from "./search-form";

export function Header() {

    return (
    <header className="flex items-center justify-between">
        <div className="flex items-center gap-5">
            <Link href={"/"} className="text-2xl font-extrabol text-white">
                mystore
            </Link>
            <SearchForm />
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