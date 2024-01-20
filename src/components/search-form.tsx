'use client'

import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent } from "react";

export function SearchForm() {

    const router = useRouter()
    const searchParams = useSearchParams()
    const query = searchParams.get('searchquery')

    // Recebe um evento que é o FORM
    function handleSearch(event: FormEvent<HTMLFormElement>) {
        // 1º Estágio do submit. Recebe o k vem do input
        event.preventDefault()

        const formData = new FormData(event.currentTarget) // Por ser só 1 campo usamos o FormData do JS
        const data = Object.fromEntries(formData) // Permite ir buscar os parametros e retorna um objecto FormData
        // console.log(data)
        const query = data.searchquery // Isolamos o parametro do objecto

        if (!query) {
            return null
        }

        router.push(`/search?searchquery=${query}`) // Adiciona ao endereço url
    }

    return (
    <form 
        onSubmit={handleSearch}
        className="flex w-[320px] items-center gar-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700"
        action="/search">
        <Search 
            className="w-5 h-5 text-zinc-500" 
        />
        <input
        name="searchquery"
        defaultValue={query ?? ''}
        type="text"
        placeholder="Pesquisar produtos..."
        className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500"
        />
    </form>
    )
}