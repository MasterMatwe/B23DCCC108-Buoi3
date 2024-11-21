import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteProduct } from '../features/products/productSlice';

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface ProductTableProps {
  products: Product[];
}

const ProductTable: React.FC<ProductTableProps> = ({ products }) => {
  const dispatch = useDispatch();

  return (
    <table>
      <thead>
        <tr>
          <th>Tên</th>
          <th>Giá</th>
          <th>Số lượng</th>
          <th>Hành động</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.quantity}</td>
            <td>
              <Link to={`/edit-product/${product.id}`}>
                <button>Sửa</button>
              </Link>
              <button onClick={() => dispatch(deleteProduct(product.id))}>Xóa</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;