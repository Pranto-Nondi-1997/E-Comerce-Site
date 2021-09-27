import React from 'react';
import './Card.css'
let Card = (props) => {
    console.log(props.product)
    let { img, phone, price, rating } = props.product;
    return (
        <div className="">
            <div class="card" >
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>

        </div>
    );
};

export default Card;