import React, { useMemo, useState } from 'react'

export const ProductFilter = () => {

    const [search, setSearch] = useState("");
    const [minPrice, setMinPrice] = useState(0)

    const products = [
        { id: 1, name: 'Laptop', price: 1200 },
        { id: 2, name: 'Smartphone', price: 800 },
        { id: 3, name: 'Tablet', price: 400 },
        { id: 4, name: 'Headphones', price: 150 },
        { id: 5, name: 'Smartwatch', price: 300 },
    ];

    const filteredProducts = useMemo(() => {
        return products.filter((product) => 
            product.name.toLowerCase().includes(search) 
            ||
            product.price >= minPrice - 5 && product.price <= minPrice + 5
        );
    },[search, minPrice])

    return (
        <div>
            <input 
                type='text'
                placeholder='Buscar'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <input 
                type='number'
                placeholder='Min price'
                value={minPrice}
                onChange={(e) => setMinPrice(Number(e.target.value))}
            />

            <ul>
                {filteredProducts.map((product, key) => (
                    <li key={key}>{product.name} - ${product.price}</li>
                ))}
            </ul>
        </div>
    )
}
