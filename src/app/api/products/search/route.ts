import { NextRequest } from "next/server";
import { z } from "zod";
import data from '../feactured/data.json';

export async function GET(request: NextRequest) {
    //await new Promise( resolve => setTimeout(resolve, 2000) )

    const { searchParams } = request.nextUrl
    console.log(searchParams)
    const query = z.string().parse(searchParams.get('searchquery'))
    console.log(query)

    const productQuery = data.products.filter( (product) => 
        product.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    )
    console.log(productQuery)
    return Response.json(productQuery)
}