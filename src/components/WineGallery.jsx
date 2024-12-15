// src/components/WineGallery.jsx
import React from "react";

const WineGallery = () => {
  const wines = [
    {
      name: "Red Wine",
      description: "A smooth and bold red wine with rich flavors.",
      price: "₱1,200",
      image: "/images/Red-Wine.jpg", // Replace with the actual image path
    },
    {
      name: "White Wine",
      description: "A refreshing white wine with a crisp finish.",
      price: "₱950",
      image: "/images/white-wine.jpg", // Replace with the actual image path
    },
    {
      name: "Sparkling Wine",
      description: "A bubbly sparkling wine for celebrations.",
      price: "₱1,500",
      image: "images/sparkling-wine.jpg", // Replace with the actual image path
    },
    {
      name: "Rose Wine",
      description: "A sweet and fruity rose wine.",
      price: "₱1,100",
      image: "images/Sparkling-Rose.jpg",
    },
  ];

  return (
    <section className="wine-gallery py-10 px-5 bg-gray-900 pt-[10%] mt-8 h-screen">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-white mb-5">Wine Gallery</h2>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-5">
          {wines.map((wine, index) => (
            <div key={index} className="wine-item bg-gray-800 p-5 rounded-lg text-center">
              <img
                src={wine.image}
                alt={wine.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h4 className="text-xl font-semibold text-white mb-2">{wine.name}</h4>
              <p className="text-sm text-gray-300 mb-2">{wine.description}</p>
              <p className="text-lg text-yellow-400">{wine.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WineGallery;
