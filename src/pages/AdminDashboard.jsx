import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const INITIAL_PRODUCTS = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 7999,
    category: 'Electronics',
    stock: 50
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 15999,
    category: 'Electronics',
    stock: 30
  },
  {
    id: 3,
    name: 'Running Shoes',
    price: 4999,
    category: 'Fashion',
    stock: 100
  },
  {
    id: 4,
    name: 'Backpack',
    price: 2999,
    category: 'Fashion',
    stock: 75
  },
  {
    id: 5,
    name: 'Smartphone',
    price: 49999,
    category: 'Electronics',
    stock: 25
  },
  {
    id: 6,
    name: 'Laptop',
    price: 89999,
    category: 'Electronics',
    stock: 15
  },
  {
    id: 7,
    name: 'Wireless Earbuds',
    price: 12999,
    category: 'Electronics',
    stock: 40
  },
  {
    id: 8,
    name: 'Gaming Console',
    price: 45999,
    category: 'Electronics',
    stock: 20
  },
  {
    id: 9,
    name: 'Camera',
    price: 59999,
    category: 'Electronics',
    stock: 10
  },
  {
    id: 10,
    name: 'Fitness Band',
    price: 3999,
    category: 'Electronics',
    stock: 60
  },
  {
    id: 11,
    name: 'Designer Sunglasses',
    price: 8999,
    category: 'Fashion',
    stock: 30
  },
  {
    id: 12,
    name: 'Leather Wallet',
    price: 1999,
    category: 'Fashion',
    stock: 45
  },
  {
    id: 13,
    name: 'Smart Speaker',
    price: 6999,
    category: 'Electronics',
    stock: 35
  },
  {
    id: 14,
    name: 'Denim Jacket',
    price: 3499,
    category: 'Fashion',
    stock: 40
  },
  {
    id: 15,
    name: 'Mechanical Keyboard',
    price: 9999,
    category: 'Electronics',
    stock: 25
  },
  {
    id: 16,
    name: 'Premium Watch',
    price: 25999,
    category: 'Fashion',
    stock: 15
  },
  {
    id: 17,
    name: 'Wireless Mouse',
    price: 2499,
    category: 'Electronics',
    stock: 50
  },
  {
    id: 18,
    name: 'Leather Belt',
    price: 1499,
    category: 'Fashion',
    stock: 55
  },
  {
    id: 19,
    name: 'Tablet',
    price: 35999,
    category: 'Electronics',
    stock: 20
  },
  {
    id: 20,
    name: 'Designer Handbag',
    price: 12999,
    category: 'Fashion',
    stock: 25
  }
];

function AdminDashboard() {
  const { user } = useAuth();
  const [products, setProducts] = useState(INITIAL_PRODUCTS);
  const [selectedProduct, setSelectedProduct] = useState(null);

  if (!user || user.role !== 'admin') {
    return <Navigate to="/login" />;
  }

  const handleUpdateStock = (productId, newStock) => {
    setProducts(products.map(product =>
      product.id === productId
        ? { ...product, stock: parseInt(newStock) }
        : product
    ));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-8">Admin Dashboard</h2>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">Product Management</h3>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Stock
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {products.map(product => (
                <tr key={product.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{product.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{product.category}</td>
                  <td className="px-6 py-4 whitespace-nowrap">₹{product.price.toLocaleString('en-IN')}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input
                      type="number"
                      value={product.stock}
                      onChange={(e) => handleUpdateStock(product.id, e.target.value)}
                      className="w-20 border rounded px-2 py-1"
                      min="0"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="text-blue-600 hover:text-blue-900"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;