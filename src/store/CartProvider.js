import axios from "axios";
import { useState } from "react";
import CartContext from "./cart-context";

const crudurl="https://crudcrud.com/api/27f771e8964547c58916f090997a1fff"

async function getPost(){
    try{
        const response=axios.get('https://crudcrud.com/api/27f771e8964547c58916f090997a1fff/cart')
        return response.data
    }catch(error){
        console.log(error)
    }
}

async function pst(obj){
    try{
        const response=axios.post('https://crudcrud.com/api/27f771e8964547c58916f090997a1fff/cart',obj)
        return response
    }catch(error){
        console.log(error)
    }
}

async function put(obj,id){
    try{
        const response=axios.put('https://crudcrud.com/api/27f771e8964547c58916f090997a1fff/cart/'+id)

    }catch(error){
        console.log(error)
    }
}

const CartProvider=(props)=>{

    const [products,setProducts]=useState([])
    const [totalAmount,setTotalAmount]=useState(0)

    const addProductHandler=async(item,size)=>{
       const existingItemIndex=products.findIndex((ele)=>ele.name===item.name)
       const existingItem=products[existingItemIndex]
       if(existingItem){
        let updatedItem;
        if(size==='l'){
          let quantityL=  existingItem.quantityL ? existingItem.quantityL : 0
             updatedItem={
                ...existingItem,
                quantityL:Number(quantityL)+1
            }
        }else if(size==='m'){
            let quantityM =existingItem.quantityM ? existingItem.quantityM :0
           updatedItem={
                ...existingItem,
                quantityM:Number(quantityM)+1
            }
        }else{
           let quantityS= existingItem.quantityS ? existingItem.quantityS : 0
            updatedItem={
                ...existingItem,
                quantityS:Number(quantityS)+1
            }
        }
        setProducts((prev)=>{
            const updatedProducts=[...prev]
            updatedProducts[existingItemIndex]=updatedItem
            return updatedProducts;
        })
       }else{
        
        setProducts((prevProducts)=>{
            const updatedProducts=prevProducts.concat(item)
            return updatedProducts
        })
       }
       setTotalAmount((prev)=>{
         prev=prev+Number(item.price)
         return prev
       })
    }

    console.log(products)
    const cartContext={
        products:products,
        totalAmount:totalAmount,
        addProduct:addProductHandler
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;