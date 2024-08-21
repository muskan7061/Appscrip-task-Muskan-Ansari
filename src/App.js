import './App.css';
import Navbar from './comopnents/Navbar/navbar'
import Discover from './comopnents/Discover/discover'
import Product from './comopnents/Product/product'
import Footer from './comopnents/Footer/footer'
import Sidebar from './comopnents/Sidebar/Sidebar'
import { useEffect, useState } from 'react';

function App() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

  return (
      <div className="app">
          <Navbar />
          <Discover />
          <div className="content-wrapper">
              <Sidebar products={products} setProducts={setProducts} /> 
              <Product products={products} />
          </div>
          <Footer />
      </div>
  );
}

export default App;
