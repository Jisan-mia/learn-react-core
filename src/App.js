import React, { useState } from 'react';
import './App.css';


function App() {

    const studentNames =['Jisan', "AJ", "Ahsan", "Shawon"];
    return (
    <div>
      <Header></Header>
      <Counter></Counter>
      <ProductContainer></ProductContainer>
      
    </div>
  );
}



function Header(){
  const headerStyle ={
    backgroundColor: "#d7e4fd",
    color: "rgba(0, 0, 0,0.8)",
    padding: "10px",
    textAlign: "center"
  }
  return (
    <h1 style={headerStyle}>Exploring React </h1>
  )
}

function Counter(){
  const counterStyle={
    backgroundColor: " rgb(116, 173, 226)",
    color: "white",
    padding: "8px",
    textAlign: "center",
    fontSize: "18px"
  }
  const btn ={
    border: "none",
    padding: "4px 9px",
    backgroundColor: "rgb(7, 97, 182)",
    color: "white",
    borderRadius: "5px",
    margin: "10px",
    cursor: "pointer",
    outline: "none",
    fontSize: "16px"
  }
  const counter = {
    backgroundColor: "yellow",
    height: "10px",
    width: "10px",
    color: "red"
  }
  const [count, setCount] = useState(0);

  return (
    <div style={counterStyle}>
      <button onClick={() => {setCount(count-1)}} style={btn}>Decrease</button>

      <span style={counter}> {count} </span>

      <button onClick={() => {setCount(count+1)}} style={btn}>Increase</button>
    </div>
  )
}

function ProductContainer(){
  class Products{
    constructor(name, price, desc){
      this.name= name;
      this.price = price;
      this.desc = desc;
    }
  }
  const product1 = new Products("Photoshop", 20.99, "Create Graphics");
  const product2 = new Products("Illustrator", 26.99, "Create vector");
  const product3 = new Products("Adobe XD", 9.99, "Design Prototype");
  
  const product4 = new Products("Acrobat Pro", 11.99, "PDF Solutions");
  
  const product5 = new Products("Premiere Pro", 22.99, "Professional Video editing");
  
  const product6 = new Products("After Effects", 20.99, "Creative motion graphics.");
  const product7 = new Products("Spark", 9.99, "Custom-branded graphics.");

  const productsArr = [ product1, product2, product3, product4, product5, product6, product7 ]
  

  const productFlexBox = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
    justifyContent: "center",
    gridGap: "10px"
  }

  return (
    <div style={productFlexBox}>
      {
        productsArr.map(pd => <Product product={pd}></Product>)
      }

      {/* <Product product ={product1}></Product>
      <Product product ={product2}></Product>
      <Product product ={product3}></Product>
      <Product product ={product4}></Product>
      <Product product ={product5}></Product>
      <Product product ={product6}></Product>
      <Product product ={product7}></Product> */}
    </div>
  )
}

function Product(props) {
  const productCard = {
    backgroundColor: "rgb(232, 244, 248)",
    width: "280px",
    padding: "18px",
    lineHeight: "40px",
    margin: "20px",
    borderRadius: "5px",
    boxShadow: "0 0 1px 1px rgba(0, 0, 0, 0.1)"
  }
  const anchor = {
    textDecoration: "none", 
  }
  const button = {
    color: "white",
    backgroundColor: "rgb(52, 112, 180)",
    padding: "4px 16px",
    borderRadius: "20px",
    border: "none",
    ouline: "blue",
    cursor: "pointer",
  }
  const secondFlexBox ={
    display:"flex",
    justifyContent: "space-between",
    marginTop: "25px"
  }

  const {name, price, desc} = props.product
  return (
    <div style={productCard}>
      <div>
        <h4> {name} </h4>
        <h2> US${price}/mo </h2>
        <p> {desc} </p>
        <a style={anchor} href="#">See plan details</a>
      </div>
      <div style={secondFlexBox}>
        <span>
          <input type="checkbox" name="" id=""/>Add Adobe Stock </span>
          <button style={button}>Buy Now</button>
      </div>
    </div>
  )
}



export default App;
