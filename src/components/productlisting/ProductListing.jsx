import { useEffect, useState } from "react";
import "./productlisting.css";

const ProductListing = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );

      const result = await response.json();

    //   console.log(result);

      if (result && result.products && result.products.length) {
        setProducts((prevProducts) => [...prevProducts, ...result.products]);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  useEffect(() => {
    if(products && products.length === 100) setDisableButton(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products])

  if (loading) {
    return <div className="loading">Please Wait...</div>;
  }

  return (
    <div className="productListContainer">
      <h1 className="project5">PROJECT 5 - PRODUCT LISTING</h1>
    <div className="productLists">
        <div className="productContainer">
        {
            products && products.length ?
            products.map((product, index) => (<div className="product" key={index}>
            <img className="productImg" src={product.thumbnail} alt={product.title} />
            <span className="productTitle">{product.title}</span>
            <span className="productDesc">{product.description}</span> 
            </div>)) : null
        } 
        </div>
        <div className="moreContainer">
        <button onClick={(()=> setCount(count+1))} className={disableButton ? "disabled" : "loadMoreBtn"}>See More Products</button>
        {
            disableButton ? <span>You have reached to 100 products.</span> : null
        }
        </div>
    </div>
    </div>
  );
};

export default ProductListing;
