import React, { useEffect, useState } from 'react';
import Card from './Card';
import './Body.css'

const Body = () => {
    let [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('./manifest.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    return (


        <div class="">
            <br />
            <div class="row">
                <div class="col-8">
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        {products.map(product => {
                            return <div class="col">
                                <div class="card h-100">
                                    <img src={product.img} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h4 class="card-title">Set Name:{product.phone}</h4>
                                        <h5 class="card-title">Price:{product.price}</h5>
                                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <button type="button" onClick class="btn btn-danger">Puchase Now</button>
                                    </div>
                                </div>
                            </div>
                        })}


                    </div>
                </div>
                <div class="col-4">
                    <div class="card text-center">
                        <div class="card-header">
                            Featured
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Special title treatment</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href class="btn btn-primary">Go somewhere</a>
                        </div>
                        <div class="card-footer text-muted">
                            2 days ago
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Body;