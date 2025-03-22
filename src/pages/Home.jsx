import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <div className="hero-section flex items-center justify-center text-white mb-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-8">Welcome to E-Shop</h1>
          <div className="max-w-2xl mx-auto">
            <p className="text-2xl mb-8">
              Discover the Latest Tech & Gadgets at Amazing Prices!
            </p>
            <Link
              to="/products"
              className="bg-blue-500 text-white px-8 py-4 rounded-lg text-xl hover:bg-blue-600 transition-colors inline-block"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Free Shipping</h3>
            <p className="text-gray-600">On orders over ₹5000</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
            <p className="text-gray-600">Get help anytime</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Money Back</h3>
            <p className="text-gray-600">30 day guarantee</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;