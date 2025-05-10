import { useState } from 'react'
import './App.css'
import ProductList from './components/ProductList';

function App() {
  const [categoryFilter, setCategoryFilter] = useState("ALL");


  const [products] = useState([
    { id: 1, name: "Laptop", price: "$999", description: "High performance laptop", category: "Electronics",image: "src/assets/laptop.jpg"},
    { id: 2, name: "IPhone 16", price: "$499", description: "Latest smartphone", category: "Electronics", image: "src/assets/iphone.jpg"},
    { id: 3, name: "Headphones", price: "$199", description: "Noise-canceling headphones", category: "Accessories", image: "src/assets/headphones.jpg"},  
  ]);

  const filteredProducts = categoryFilter === "ALL"
    ? products
    : products.filter(product => product.category === categoryFilter);

  return (
    <div>
      <label htmlFor="category">Filter by Category:</label>
      <select className="filter-box" value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
        <option value="ALL">All</option>
        <option value="Electronics">Electronics</option>
        <option value="Accessories">Accessories</option>
      </select>
      <ProductList products={filteredProducts}/>
    </div>
  )
}

export default App
