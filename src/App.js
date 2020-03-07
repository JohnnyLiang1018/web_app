import React, { useEffect, useState } from 'react';
import TopNav from './components/TopNav'
import ItemDisplay from './components/itemDisplay'
import Upload from './components/upload'
import { Fab } from '@material-ui/core';


const postSection = {
  margin: 'auto',
  width:'60%'
}

export default function App() {
    const [loginState,setLoginState] = useState('')

    useEffect(() => {
      // FB.getLoginStatus(function(response){
      //     setLoginState(response.status)
      //     console.log(loginState)
      // })
      document.addEventListener('FBObjectReady', FBLogin)

    })
    
    const FBLogin = () => {
      window.FB.getLoginStatus(function(response){
        setLoginState(response.status)
        console.log(response.status)
      })
    }


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

