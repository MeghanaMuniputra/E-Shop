import { useState } from 'react';
import { useCart } from '../context/CartContext';

const PRODUCTS = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 7999,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
    category: 'Electronics'
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 15999,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500',
    category: 'Electronics'
  },
  {
    id: 3,
    name: 'Running Shoes',
    price: 4999,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500',
    category: 'Fashion'
  },
  {
    id: 4,
    name: 'Backpack',
    price: 2999,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500',
    category: 'Fashion'
  },
  {
    id: 5,
    name: 'Smartphone',
    price: 49999,
    image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=500',
    category: 'Electronics'
  },
  {
    id: 6,
    name: 'Laptop',
    price: 89999,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500',
    category: 'Electronics'
  },
  {
    id: 7,
    name: 'Wireless Earbuds',
    price: 12999,
    image: 'https://www.boat-lifestyle.com/products/nirvana-ion-bluetooth-wireless-earbuds?w=500',
    category: 'Electronics'
  },
  {
    id: 8,
    name: 'Gaming Console',
    price: 45999,
    image: 'https://images.unsplash.com/photo-1605901309584-818e25960a8f?w=500',
    category: 'Electronics'
  },
  {
    id: 9,
    name: 'Camera',
    price: 59999,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500',
    category: 'Electronics'
  },
  {
    id: 10,
    name: 'Fitness Band',
    price: 3999,
    image: 'https://images.unsplash.com/photo-1576243345690-4e4b79b63288?w=500',
    category: 'Electronics'
  },
  {
    id: 11,
    name: 'Designer Sunglasses',
    price: 8999,
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500',
    category: 'Fashion'
  },
  {
    id: 12,
    name: 'Leather Wallet',
    price: 1999,
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=500',
    category: 'Fashion'
  },
  {
    id: 13,
    name: 'Smart Speaker',
    price: 6999,
    image: 'https://images.unsplash.com/photo-1543512214-318c7553f230?w=500',
    category: 'Electronics'
  },
  {
    id: 14,
    name: 'Denim Jacket',
    price: 3499,
    image: 'https://images.unsplash.com/photo-1601333144130-8cbb312386b6?w=500',
    category: 'Fashion'
  },
  {
    id: 15,
    name: 'Mechanical Keyboard',
    price: 9999,
    image: 'https://images.unsplash.com/photo-1602025882379-e01cf08baa51?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=500',
    category: 'Electronics'
  },
  {
    id: 16,
    name: 'Premium Watch',
    price: 25999,
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500',
    category: 'Fashion'
  },
  {
    id: 17,
    name: 'Wireless Mouse',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500',
    category: 'Electronics'
  },
  {
    id: 18,
    name: 'Leather Belt',
    price: 1499,
    image: 'https://craftandglory.in/products/legacy-belt-vintage-brown?w=500',
    category: 'Fashion'
  },
  {
    id: 19,
    name: 'Tablet',
    price: 35999,
    image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=500',
    category: 'Electronics'
  },
  {
    id: 20,
    name: 'Designer Handbag',
    price: 12999,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500',
    category: 'Fashion'
  }
];

function Products() {
  const { addToCart } = useCart();
  const [category, setCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const filteredProducts = PRODUCTS
    .filter(product => category === 'all' || product.category === category)
    .sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      return 0;
    });

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-4 items-center justify-between">
        <div className="space-x-4">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border rounded-md px-4 py-2"
          >
            <option value="all">All Categories</option>
            <option value="Electronics">Electronics</option>
            <option value="Fashion">Fashion</option>
          </select>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border rounded-md px-4 py-2"
          >
            <option value="name">Sort by Name</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">₹{product.price.toLocaleString('en-IN')}</p>
              <button
                onClick={() => addToCart(product)}
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;