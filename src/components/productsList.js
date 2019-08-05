import React from 'react';
import './productsList.css';

const productsList=(props)=>{
    const products=props.products.map((product)=>{

        return(

            <div key={product.id}>
                <img alt={product.tags[1]} src={product.thumbnail} />
                <ul className="ul">
                    <li><h3>{product.title}</h3></li>
                    <li><h4>Precio: {product.price} COP</h4></li>
                    <li><h4>Descripción: {product.tags[0]}</h4></li>
                    <li><h4>Cantidades disponibles: {product.available_quantity}</h4></li>
                </ul>
                
            </div>

        );


    });

    return <div className="products-list">{products}</div>;

};

export default productsList;