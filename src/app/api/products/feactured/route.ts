import data from "./data.json"


export async function GET() {
    const featuredProducts = data.products.filter(product => product.feacture)
    console.log(featuredProducts)
    return Response.json(featuredProducts)

}