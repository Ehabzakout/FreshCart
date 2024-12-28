import axios from "axios";
import { createContext, useState } from "react";


export const userContext = createContext("")

export default function UserProvider({ children }) {
    const [token, settoken] = useState(localStorage.getItem("token"))
    const [addresses,setAddress]=useState(null)
    async function getAddress(){
        try{const {data}= await axios.request({method:"GET",url:"https://ecommerce.routemisr.com/api/v1/addresses",headers:{token}})
        setAddress(data.data)
    }catch (error){
    console.log(error)
    toast.error("Cann't get your addresses ")
    }
      }

    function logOut() {
        settoken(null);
        localStorage.removeItem("token");
    }
    return <userContext.Provider value={{ token, settoken, logOut,addresses,getAddress }}>
        {children}
    </userContext.Provider>
}