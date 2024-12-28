import axios from "axios";
import { createContext, useContext, useState } from "react";
import { userContext } from "./User.context";
import toast from "react-hot-toast";


export const wishlistContext = createContext()

export default function WishlistProvider({ children }) {
    let [wishList, setwish] = useState(null)
    let { token } = useContext(userContext)

    async function getWishList() {
       try {
        let { data } = await axios.request({ url: "https://ecommerce.routemisr.com/api/v1/wishlist", method: "GET", headers: { token } })
        setwish(data)
       } catch (error) {

       }
    }
    async function addTowhishlist({ id }) {
        try {
            let option = { method: "POST", url: "https://ecommerce.routemisr.com/api/v1/wishlist", headers: { token }, data: { productId: id } }
            let { data } = await axios.request(option)
            setwish(data)
            getWishList()

        } catch (error) {
            toast.error(error)
        }

    }
    async function remvefav({ id }) {
       try {let option = { url: `https://ecommerce.routemisr.com/api/v1/wishlist/${id}`, method: "DELETE", headers: { token } }
        let { data } = await axios.request(option)
        setwish(data)
        getWishList()}
        catch (error){}
    }

    return <>
        <wishlistContext.Provider value={{ wishList, getWishList, addTowhishlist, remvefav }}>
            {children}
        </wishlistContext.Provider>
    </>
}