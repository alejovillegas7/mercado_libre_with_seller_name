import React from 'react';
import './productsList.css';

const productsList=(props)=>{

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
                    {props.nombre_seller.map((nombre) => (
                        (product.seller.id===nombre.data.id? <div><li><h4>Seller: {nombre.data.nickname}</h4></li></div>:null)
                        ))}
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