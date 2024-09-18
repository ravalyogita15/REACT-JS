
// // function SingleProductPage(){

// //     return (
// //         <div data-testid="products-container">   
// //             <div>
// //                 <h3 data-testid="product-brand"></h3>
// //             </div>
// //             <div >
// //             <img data-testid="product-image"/>
// //             </div>
// //             <div data-testid="product-category">
// //             </div>
           
// //             <div data-testid="product-details">
// //             </div>
// //             <div data-testid="product-price">
// //             </div>

// //             </div>
// //     )
// // }
// // export default SingleProductPage

// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const SingleProductPage = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       const res = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products/${id}`);
//       const data = await res.json();
//       setProduct(data.data);
//       setLoading(false);
//     };
//     fetchProduct();
//   }, [id]);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div>
//       <h1 data-testid="product-brand">{product.brand}</h1>
//       <img data-testid="product-image" src={product.img} alt={product.brand} />
//       <p data-testid="product-category">Category: {product.category}</p>
//       <p data-testid="product-price">Price: {product.price}</p>
//       <p data-testid="product-details">{product.details}</p>
//     </div>
//   );
// };

// export default SingleProductPage;
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const SingleProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(
        `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products/${id}`
      );
      const data = await res.json();
      setProduct(data.data);
      setLoading(false);
    };
    fetchProduct();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="product-container">
      <h1 data-testid="product-brand">{product.brand}</h1>
      <img
        data-testid="product-image"
        src={product.img}
        alt={product.brand}
      />
      <p data-testid="product-category" className="product-category">
        Category: {product.category}
      </p>
      <p data-testid="product-price" className="product-price">
        Price: {product.price}
      </p>
      <p data-testid="product-details" className="product-details">
        {product.details}
      </p>
    </div>
  );
};

export default SingleProductPage;
