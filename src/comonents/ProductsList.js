import { useEffect, useState } from "react";
import Product from "./Product";

function ProductsList() {
  const API_url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const [category, setCategories] = useState([]);

  const getPoducts = () => {
    fetch(API_url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  const getCategories = () => {
    fetch(`${API_url}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  };

  const getPbC = (cat) => {
    fetch(`${API_url}/category/${cat}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };
  useEffect(() => {
    getPoducts();
    getCategories();
  }, []);
  return (
    <>
      <h2 className="text-center">Our Products</h2>
      <div className="container">
        <button onClick={()=>{getPoducts()}} className="btn btn-info">All</button>
        {category.map((category) => {
          return (
            <button
              key={category}
              onClick={() => {
                getPbC(category);
              }}
              className="btn btn-info"
            >
              {category}
            </button>
          );
        })}
        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-3" key={product.id}>
                <Product product={product}></Product>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProductsList;
