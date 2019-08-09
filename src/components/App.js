import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar'
import ProductsList from './productsList';

class App extends React.PureComponent{
    
    state={products:[], id:[], comments:[], id_seller:[],seller_name:[] };
    onSearchSubmit=async(term)=>{//este metodo nos ayudara a recibir el term del searchBar para hacer las peticiones al API
    
        const response=await axios.get('https://api.mercadolibre.com/sites/MLC/search',{
            params:{
                q: term
                //access_token: 'APP_USR-3440630989633006-080416-23837ec4c7973889c5d0264b78f78d84-268273205'
            }
        });
        
        this.setState({products:response.data.results, id:this.state.products.map(producto=>producto.id),id_seller:this.state.products.map(product=>product.seller.id)});
        this.setState({id:this.state.products.map(producto=>producto.id)}); 
        this.setState({id_seller:this.state.products.map(product=>product.seller.id)});
        console.log(this.state.products);
        console.log(this.state.id);
        console.log(this.state.id_seller);

        //for(var i=0;i<this.state.id.length;i++){
            //var ITEM_ID = this.state.id[i];
        //var response1=await axios.get(`https://api.mercadolibre.com/items/MLC456679163/description`);
        //this.setState({comments:[...this.state.comments, response1]});
        //}
        

        for(var i=0;i<this.state.id_seller.length;i++){
            var SELLER_ID = this.state.id_seller[i];
            var response2=await axios.get(`https://api.mercadolibre.com/users/${SELLER_ID}`);
            this.setState({seller_name:[...this.state.seller_name, response2]});
            }


        console.log(this.state.comments);
        console.log(this.state.seller_name);
        

    }

    render(){
        return (
            <div className="ui container" style={{marginTop:'10px'}}>
                <h2><font color="#1A1E93">Alejandro Villegas Lopez - mercado libre</font></h2>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <ProductsList products={this.state.products} nombre_seller={this.state.seller_name}/>
            </div>
            );
    }

}

export default App;