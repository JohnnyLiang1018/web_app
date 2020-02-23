import React, {useState,useEffect} from 'react'
import Listing from './listing'
import SelectBox from './selectBox'

export default function ItemDisplay(){
    const table = {
        display: 'table',
        margin: 'auto',
      
      }
      
    const list = {
        midWidth: '69px',
        listStyle: 'none',
        paddingTop: '20px',
        
    }
      
    const li_item = {
        margin: '70px'
    }
    


    const renderProduct = ({listing_id,title,category,description,price}) => <Listing key={listing_id} listing_id={listing_id} title={title} category={category} description={description} price={price}/>
    const [products,setProducts] = useState([])
    useEffect(() => {
        if(products.length === 0){
            fetch('http://13.58.178.84:4000/posting')
            .then(response => response.json())
            .then(response => setProducts(response.data))
            .catch(err => console.error(err))
        }
        console.log('test')
    })

    return (
        <div>
            <SelectBox handler = {setProducts}/>
            <div style={table}>
                <ul style={list}>
                    <li style={li_item}> {products.map(renderProduct)} </li>
                </ul>
            </div>
        </div>
    )
}
