import { useContext } from "react"
import { cartContext } from "../context/Cart.context"

export default function CartItems({ cartItem }) {
    let { deleteItems, updateQuantity } = useContext(cartContext)

    return <>
        < div className="grid grid-cols-12 mt-5" >
            <div className="col-span-6 grid grid-cols-6 gap-2">
                <div className="col-span-1" ><img src={cartItem.product.imageCover} className="w-full" /></div>
                <div className="col-span-4">
                    <h1>{cartItem.product.title}</h1>
                    <h2 className="text-primary font-light">Price:{cartItem.price} $</h2>
                    <button onClick={() => { deleteItems({ id: cartItem.product.id }) }} className="btn mt-3 bg-red-500"><i className="fa-solid fa-trash-can"></i> Remove</button>
                </div>
            </div>
            <div className="flex items-center gap-6 col-span-6 col-start-10">
                <button onClick={() => { updateQuantity({ id: cartItem.product.id, count: (cartItem.count) - 1 }) }}> <i className="fa-solid fa-minus border border-2 border-primary px-2 py-1 hover:bg-primary hover:text-white hover:cursor-pointer rounded-md"></i></button>
                <h1 className="text-lg">{cartItem.count}</h1>
                <button onClick={() => { updateQuantity({ id: cartItem.product.id, count: (cartItem.count) + 1 }) }}> <i className="fa-solid fa-plus border border-2 border-primary px-2 py-1 hover:bg-primary hover:text-white hover:cursor-pointer rounded-md"></i></button>

            </div>
        </div>
    </>
}