import { StaticImageData } from "next/image";
import { CardProduct } from "../Cards/CardProduct";

interface ProductsInterface {
    img: string[] | StaticImageData[];
}

export const ProductsHome = (props: ProductsInterface) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-24 px-12 animate-show-glasses">
            {props.img.map(img => <CardProduct img={img} />)}
        </div>
    )

}