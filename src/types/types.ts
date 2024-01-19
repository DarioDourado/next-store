
export interface Product {
    id: number;
    title: string;
    slug: string;
    price: number;
    image: string;
    description: string,
    feacture: boolean
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