import { useMutation } from '@apollo/client';
import { Cookies } from 'next/dist/server/web/spec-extension/cookies';
import Image from 'next/image'
import { useRouter } from 'next/router';
import { parseCookies } from 'nookies';
import { Trash } from 'phosphor-react';
import { DELETE_CART_PRODUCT } from '../../graphql/mutations/delete/deleteCartProduct';
import { CART_MODAL_QUERY } from '../../graphql/queries/cart/getCartModal';
import { CART_QUERY } from '../../graphql/queries/cart/getProductsCart';

interface CartProductInterface{
    cartProduct: {
        id:string;
        quantity:number;
        product: {
            id: string;
            name:string;
            price:number;
            image: {
                url:string;
            }
        }
    }

}

export const CartProduct = ({cartProduct} : CartProductInterface) => {

    const router = useRouter()
    const cookies = parseCookies()

    const [deleteProduct] = useMutation(DELETE_CART_PRODUCT, {
        onCompleted: () => {
            if(router.pathname === "/payment") router.push("/cart")
        },
        refetchQueries: [{query: CART_MODAL_QUERY, variables:{id: cookies['client-auth']}}, {query: CART_QUERY, variables: {id:cookies['client-auth']}}]
    })

    const handleDeleteProduct = () => {
        deleteProduct({
            variables: {
                id: cartProduct.id
            }
        })
    }

    return(
        <div className='flex flex-col gap-4'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-4'>
                    <img src={cartProduct.product.image.url} alt="Product image" width={90} height={56.25} />
                    <div className="flex flex-col">
                        <span>{cartProduct.product.name}</span>
                        <span>R$ {cartProduct.product.price} X {cartProduct.quantity} <span className="font-bold">R$ {cartProduct.quantity*cartProduct.product.price}</span></span>
                    </div>
                </div>

                <Trash onClick={() => handleDeleteProduct()} size={24} color="#000" className='cursor-pointer' />
            </div>
        </div>
    )
}