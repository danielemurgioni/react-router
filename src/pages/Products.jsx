import React from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { useState, useEffect } from 'react'

const prodEndpoint = "https://fakestoreapi.com/products"

const Products = () => {

    const [products, setProducts] = useState([])

    const fetchProducts = () => {
        axios.get(prodEndpoint).then((resp) => { setProducts(resp.data) })
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <>
            <div className="navbar-container">
                <Navbar />
            </div>
            <div className="products-container">
                <h1>Products</h1>
                {products.map((item) => (
                    <div key={item.id} className='product'>
                        <h2>{item.title}</h2>
                        <img src={item.image} alt="" />
                        <p>{item.description}</p>
                        <p>Price: {item.price}£</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Products