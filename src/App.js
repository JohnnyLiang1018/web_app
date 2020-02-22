import React, { Component } from 'react';
import TopNav from './components/TopNav'
import ItemDisplay from './components/itemDisplay'
import Upload from './components/upload'

const postSection = {
  margin: 'auto',
  width:'60%'
}

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      product: {
        title:'',
        category:'',
        description:'',
        price: 0,
        quantity: 0,
      }
    }
    this.addProduct = this.addProduct.bind(this)
  }

  addProduct = _ =>{
    const {product} = this.state
    fetch(`/posting/add?title=${product.title}&category=${product.category}&description=${product.description}&price=${product.price}&quantity=${product.quantity}`)
    .then(this.getProducts)
    .catch(err => console.error(err))
  }
  
  render(){
    const { product } = this.state
    return (
      <div className="App">
        <TopNav/>
        <div style={postSection}>
          {/* <input 
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


          <Button variant="contained" color="primary" onClick={() => this.addProduct}>Add</Button> */}
          <Upload/>
        </div>
        <ItemDisplay/>
      </div>
    )
  }
}


export default App
