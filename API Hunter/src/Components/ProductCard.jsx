// export default function ProductCard({
//     brand,
//     category,
//     price,
//     id
// }){
//     return (
//         <tr data-testid="item">
//             <td>{id}</td>
//             <td>
// //     add Link here and keep the data-testid="brand" on Link tag      
//             </td>
//             <td data-testid="category">
//             </td>
//             <td data-testid="price">
//             </td>
//                     </tr>
//     )
// }


import { Link } from "react-router-dom";

const ProductCard = ({ id, brand, category, price, serialNo }) => {
  return (
    <tr data-testid="item">
      <td>{serialNo}</td>
      <td data-testid="brand">
        <Link to={`/products/${id}`} style={{color:"black",textDecoration:"none"}}>{brand}</Link>
      </td>
      <td data-testid="category">{category}</td>
      <td data-testid="price">{price}</td>
    </tr>
  );
};

export default ProductCard;
