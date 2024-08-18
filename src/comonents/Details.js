import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Details() {
  const api_url = "https://fakestoreapi.com/products";
  const [product, setProduct] = useState({});
  const params = useParams();

  useEffect(() => {
    fetch(`${api_url}/${params.productId}`)
      .then((res) => res.json())
      .then((product) => setProduct(product));
  }, []);

  return (
    <>
    <div className="Details-card">
        <img src={product.image} className="img-top" alt={product.title} />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.category}</p>
          <p className="card-text">{product.description}</p>
          <p className="card-text">Price: {product.price}$</p>
        </div>
      </div>
    </>
  );
}

export default Details;
