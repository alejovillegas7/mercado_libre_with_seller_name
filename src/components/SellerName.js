import React from 'react';

const SellerName=(props)=>{


    const nombresSeller = props.nombre_seller.map((nombre)=>{

        if(props.id===nombre.data.id){
            return (<div><li><h4>Seller: {nombre.data.nickname}</h4></li></div>);
        }return null;

    });

    return <li><h4>{nombresSeller}</h4></li>;

}

export default SellerName;