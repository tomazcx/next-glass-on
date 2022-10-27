import { StaticImageData } from "next/image";
import { CardProduct } from "../Cards/CardProduct";

interface ProductsInterface {
    img: string[] | StaticImageData[];
}

export const ProductsHome = (props: ProductsInterface) => {
    
    let cont = 0

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-24 px-12 animate-show-glasses">
            {props.img.map((img) => {
                cont++
                return <CardProduct key={cont} img={img} />
            })}
        </div>
    )

}