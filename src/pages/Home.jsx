import axios from "axios"
import { useEffect, useState } from "react"
import Loading from "../componat/Loading"
import Card from "../componat/Card"
import Homeslider from "../componat/Homeslider"
import Cardslider from "../componat/Cardslider"
import { useQuery } from "@tanstack/react-query"
import { Helmet } from "react-helmet"

export default function Home() {
    async function getProduct() {
        return await axios({ method: "GET", url: "https://ecommerce.routemisr.com/api/v1/products" })
    }
    let { data, isLoading } = useQuery({
        queryKey: ["product"]
        , queryFn: getProduct,
        refetchOnMount: true,
        staleTime: 3000,
        refetchOnWindowFocus: true,
        // gcTime: 6000,
    })
    if (isLoading) {
        return <Loading />
    }
    return <>
        <Helmet>
            <title>Home</title>
            <meta name="description" content="Welcome to home page" />
        </Helmet>
        <Homeslider />
        <Cardslider />
        <div className="grid grid-cols-12 gap-3">{data.data.data.map((el) => <Card productInfo={el} key={el._id} />)} </div>
    </>
}