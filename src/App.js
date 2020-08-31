import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  var name = 'Do not know';
 const products=[{name: 'Adobe Reader',Price:'$90.99'},
{name:'Adobe Photoshop',Price: '$108.00'},
{name:'Adobe Pdf',Price:'$40.00'}
]
  
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done<code>src/App.js</code> and save to reload.
        </p>
        <h2>Programed By: Arafat Shuvo</h2>
        <h1>Barca News: Messi</h1>
        <p>My second half: {name}</p>
        <p>starting journey for {20+1} days</p>

<p>Ohh ,, Starting react so funny</p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ul>
        {
          products.map(Product=><li>{Product.name}</li>)
        }
          </ul>

          <Counter></Counter>

        <Product name={products[0].name} Price={products[0].Price}></Product>
        <Product name={products[1].name} Price={products[1].Price}></Product>
        <Product name={products[2].name} Price={products[2].Price}></Product>
      <Person name="Lionel Messi"></Person>
      
      </header>
    </div>
  );
}



function Product(props){
const productStyle={
  border:'1px solid gray',
  margin:'5px',
  borderRadius:'3px',
height:'200px',
width:'180px',
backgroundColor:'gray',
float:'left'
}
return (
  <div style={productStyle}>
  <h2>{props.name}</h2>
  <h3>{props.Price}</h3>
 <button>Buy Now</button>
  </div>
)
}
function Counter(){
  const [count] = useState(5)
  const handleIncrease = () => console.log('clicked');
  return(
    <div>
    <h3>Count : {count}</h3>
    <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}
function Person(props){
  const personStyle={
    border:'5px solid yellow',
    margin: '10px',
    padding:'10px'
  }
  console.log(props)
  return (<div style = {personStyle}>

    <h2>Name:{props.name}</h2>
    <h4>Never Leave Barca Please</h4>
    </div>)
}

export default App;
