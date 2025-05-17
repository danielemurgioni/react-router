import React from 'react'

import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const ProductDetail = () => {

    const { id } = useParams()

    const [productDetail, setProductDetail] = useState({})

    const fetchProductDetail = () => {
        axios.get(`https://fakestoreapi.com/products/${id}`).then((resp) => { setProductDetail(resp.data) })
    }

    useEffect(() => {
        fetchProductDetail()
    }, [id])

    return (
        <>
            <h1>Product Detail id:{id}</h1>
        </>
    )
}

export default ProductDetail