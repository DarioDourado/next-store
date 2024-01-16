
interface NEXT_PUBLIC_API_BASE_URL {
    baseUrl: string
}

// wrapper em que damos ao fetch um url e o fetch prefixa-me com o url do env (http://localhost:3000).
// ou seja, a qualquer url irá sempre adicionar http://localhost:3000
export function api(path: string, init?: RequestInit) {
    const baseUrl: string = 'http://localhost:3000';
    const apiPrefix = '/api' // porque o baseUrl não aceita url´s com patch, teremos que adicionar um apiPrefix para contornar a situação
    const url = new URL(apiPrefix.concat(path), baseUrl)

    return fetch(url, init)
}
 
