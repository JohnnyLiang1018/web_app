import React from 'react'


export default function addListing(props){

    return (
        <div style={postSection}>
          <input 
          value={product.name} 
          onChange={e => this.setState({product:{...product,title: e.target.value}})} />
          <input
          value={product.category}
          onChange={e => this.setState({product:{...product,category: e.target.value}})} />
          <input
          value={product.description}
          onChange={e => this.setState({product:{...product,description: e.target.value}})} />
          <input
          value={product.price}
          onChange={e => this.setState({product:{...product,price: e.target.value}})} />
          <input
          value={product.quantity}
          onChange={e => this.setState({product:{...product,quantity: e.target.value}})} />

          <Button variant="contained" color="primary" onClick={this.addProduct}>Add</Button>
        </div>
    )
}