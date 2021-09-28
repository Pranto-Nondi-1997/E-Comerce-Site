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
        <div className="">
            <br />
            <div className="row">
                <div className="col-8">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {products.map(product => {
                            return <div className="col">
                                <div class="card h-100">
                                    <img src={product.img} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h4 className="card-title">Set Name:{product.phone}</h4>
                                        <h5 className="card-title">Price:{product.price}</h5>
                                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <button type="button" className="btn btn-danger" onClick={() => addToHandel(product)} >Puchase Now</button>
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
                <div className="col-4">
                    <div className="card text-center">
                        <div className="card-header">
                            Product Total History
                        </div>
                        <div className="card-body">
                            <h6 className="card-title">Item:{card.length}</h6>
                            <h5 className="card-text" >Price:<span id="price">0</span></h5>
                            <p className="card-text">Product List<ol>
                                <span id="productName"></span></ol></p>
                            <a href className="btn btn-primary">Details</a>
                        </div>
                        <div className="card-footer text-muted">

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Body;