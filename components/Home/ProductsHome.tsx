import { StaticImageData } from "next/image";
import { CardProduct } from "../Cards/CardProduct";

interface ProductInterface {
    image: {
        url: string
    };
    name:string;
    price:number;
    id:string;
}

interface ProductsInterface {
    products: ProductInterface[];
}

export const ProductsHome = ({products}: ProductsInterface) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-12 animate-show-glasses">
            {products.map((product : ProductInterface) => <CardProduct key={product.id} product={product} />)}
        </div>
    )

}