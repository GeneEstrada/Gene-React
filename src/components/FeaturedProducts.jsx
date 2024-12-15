import React from "react";

const FeaturedProducts = () => {
  return (
    <section id="featured-products" className="featured-products bg-gray-900 text-white py-10 px-5 pt-[10%] mt-8 h-screen">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-5">Featured Products</h2>
        <div className="categories flex justify-center space-x-10 mb-10">
          <span className="category text-lg font-bold">Best Seller</span>
          <span className="category text-lg font-bold">New Arrival</span>
          <span className="category text-lg font-bold">Most Wanted</span>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {/* Product 1 */}
          <div className="product-card bg-gray-800 p-5 rounded text-center">
            <img src="/images/Vintage-Wines.jpg" alt="Red Wine" className="w-full h-40 object-cover rounded mb-4" />
            <h4 className="text-xl font-semibold mb-2">Red Wine</h4>
            <p className="text-sm mb-2">Premium Red Wine</p>
            <p className="text-sm text-gray-300">₱1,200</p>
          </div>
          {/* Product 2 */}
          <div className="product-card bg-gray-800 p-5 rounded text-center">
            <img src="/images/Sparkling-Rose.jpg" alt="Sparkling Rose" className="w-full h-40 object-cover rounded mb-4" />
            <h4 className="text-xl font-semibold mb-2">Sparkling Rose</h4>
            <p className="text-sm mb-2">Limited Edition Sparkling</p>
            <p className="text-sm text-gray-300">₱1,500</p>
          </div>
          {/* Product 3 */}
          <div className="product-card bg-gray-800 p-5 rounded text-center">
            <img src="/images/white-wine.jpg" alt="White Wine" className="w-full h-40 object-cover rounded mb-4" />
            <h4 className="text-xl font-semibold mb-2">White Wine</h4>
            <p className="text-sm mb-2">Classic White Wine</p>
            <p className="text-sm text-gray-300">₱950</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
