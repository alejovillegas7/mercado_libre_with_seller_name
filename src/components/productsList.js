import React from 'react';
import './productsList.css';
import SellerName from './SellerName';

const productsList=(props)=>{

    const nombre_seller = props.nombre_seller;

    const nombres=[];

    const products=props.products.map((product)=>{

        props.nombre_seller.forEach(data => {

            if(product.seller.id===data.data.id){

                nombres.push(data.data.nickname);

            }
            
        });

        return(

              <div key={product.id}>
                <img alt={product.tags[1]} src={product.thumbnail} />
                <ul className="ul">
                    <li><h3>{product.title}</h3></li>
                    <li><h4>Precio: {product.price} COP</h4></li>
                    <SellerName nombre_seller={nombre_seller} id={product.seller.id} />
                    <li><h4>Seller id: {product.seller.id}</h4></li>
                    <li><h4>Cantidades disponibles: {product.available_quantity}</h4></li>
                </ul>
                
            </div>

        );


    });

    return (
        <div className="products-list">
            {products}
        </div>
    );

};

export default productsList;