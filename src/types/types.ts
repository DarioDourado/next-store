
export interface Product {
    id: number;
    tittle: string;
    slug: string;
    price: number;
    image: string;
    description: string,
    feactured: boolean
}

export interface GetParams {
    params: {
        slug: string;
    }
}

export interface ProductProps {
    params: {
        slug: string;
    }
}