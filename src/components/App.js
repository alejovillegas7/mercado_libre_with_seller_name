import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar'
import ProductsList from './productsList';

class App extends React.Component{
    
    state={products:[]};
    onSearchSubmit=async(term)=>{//este metodo nos ayudara a recibir el term del searchBar para hacer las peticiones al API
    
        const response=await axios.get('https://api.mercadolibre.com/sites/MLC/search',{
            params:{
                q: term
                //access_token: 'APP_USR-3440630989633006-080416-23837ec4c7973889c5d0264b78f78d84-268273205'
            }
        });
        
        this.setState({products:response.data.results}); 
        console.log(this.state.products);

    }

    render(){
        return (
            <div className="ui container" style={{marginTop:'10px'}}>
                <h2><font color="#1A1E93">Alejandro Villegas Lopez - mercado libre</font></h2>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <ProductsList products={this.state.products}/>
            </div>
            );
    }

}

export default App;