import React, { useEffect, useState } from 'react';
import Card from './Card';
import './Body.css'
const Body = () => {
    let [products, setProducts] = useState([]);
    let [card, setCard] = useState([]);
    useEffect(() => {
        fetch('./manifest.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    let addToHandel = (product) => {

        let newCard = [...card, product];

        setCard(newCard);
        // console.log(card);
        // console.log(newCard);
        callPrice(newCard);
    }
    let callPrice = (newProducts) => {

        let total = 0;
        let setName = document.getElementById('productName').innerText;
        newProducts.map(newProduct => {
            total = total + newProduct.price;
            document.getElementById('price').innerText = total;

            document.getElementById('productName').innerText = (newProduct.phone + '+' + setName);

        })

    }

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
                                        <button type="button" class="btn btn-danger" onClick={() => addToHandel(product)} >Puchase Now</button>
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
                <div class="col-4">
                    <div class="card text-center">
                        <div class="card-header">
                            Product Total History
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Item:{card.length}</h5>
                            <p class="card-text" >Price:<span id="price">0</span></p>
                            <p class="card-text">Product List<ol>
                                <span id="productName"></span></ol></p>
                            <a href class="btn btn-primary">Details</a>
                        </div>
                        <div class="card-footer text-muted">

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Body;