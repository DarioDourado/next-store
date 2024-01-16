import { GetParams } from "@/types/types";
import { z } from "zod";
import data from "../feactured/data.json";



export async function GET(request: Request, { params }:GetParams) {
    //console.log(params.slug) 

    const slug = z.string().parse(params.slug)

    const product = data.products.find(product => product.slug === slug)

    //console.log(product)

    if (!product) {
        return Response.json({ message: 'Product not found'}, { status: 404 })
    }


    return Response.json(product)

}