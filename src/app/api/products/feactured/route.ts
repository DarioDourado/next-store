import data from "../feactured/data.json"


export async function GET() {
    const featuredProducts = data.products.filter(product => product.feactured)
    return Response.json(featuredProducts)
}