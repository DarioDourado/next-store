import data from "./feactured/data.json"


export async function GET() {

    return Response.json(data.products)

}