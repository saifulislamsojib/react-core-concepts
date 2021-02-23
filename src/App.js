import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const products =[
    {name: "Phone", price: "150"},
    {name: "Laptop", price: "500"},
    {name: "Watch", price: "100"},
    {name: "Tab", price: "200"},
    {name: "mouse", price: "80"}
  ]
  return (
    <div className="App">
      <Post></Post>
      <Counter count={count} />
      {
        products.map((product, i) => <Product product={product} setCount={setCount} count={count} key={i}></Product>)
      }
    </div>
  );
}

function Post(){
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res=> res.json())
    .then(data => setPosts(data))
  }, [])
  return (
    <div>
      <h2>total Posts: {posts.length}</h2>
      <ol>
      {
        posts.map(post => <li key={post.id}>{post.title}</li>)
      }
      </ol>
    </div>
  )
}

function Counter({count}) {
  return (
    <div>
      <h2>Count: {count}</h2>
    </div>
  );
}

function Product({product, setCount, count}) {
  const {name, price} = product;
  const productStyle = {
    color: "red",
    backgroundColor: "lightgray",
    padding: "10px",
    margin: "10px auto",
    borderRadius: "10px",
    width: "400px",
  }
  const btnStyle = {
    borderRadius: "7px",
    border: "none",
    backgroundColor: "purple",
    color: "white",
    padding: "10px 15px",
    cursor: "pointer"
  }
  return(
    <div style={productStyle}>
      <h1>Name: {name}</h1>
      <h2>Price: ${price}</h2>
      <button onClick={()=> setCount(count + 1)} style={btnStyle}>Buy Now</button>
    </div>
  );
}

export default App;
