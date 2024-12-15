import React, { useState } from "react";

const WinePairing = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const pairings = [
    {
      wine: "Red Wine",
      foods: "Steak, Grilled Meats, Pasta with Red Sauce",
      image: "images/red-wine1.jpg", // Use your image URL
    },
    {
      wine: "White Wine",
      foods: "Chicken, Fish, Light Pastas",
      image: "images/White-Wine-pair.jpg", // Use your image URL
    },
    {
      wine: "Sparkling Wine",
      foods: "Sushi, Popcorn, Light Hors d'Oeuvres",
      image: "images/sparkling-wine.jpg", // Use your image URL
    },
    {
      wine: "Rosé Wine",
      foods: "Salads, Shrimp, Light Pasta Dishes",
      image: "images/Rosé-Wine-pair.jpg", // Use your image URL
    },
  ];

  const openModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage("");
  };

  return (
    <section
      id="wine-pairing"
      className="wine-pairing py-10 px-5 bg-gray-900 pt-[10%] mt-8 h-screen"
    >
      <div className="max-w-6xl mx-auto text-center text-white">
        <h2 className="text-3xl font-semibold mb-5">Wine & Food Pairing Tips</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {pairings.map((pairing, index) => (
            <div key={index} className="pairing bg-gray-800 p-5 rounded-lg">
              <img
                src={pairing.image}
                alt={pairing.wine}
                className="w-full h-48 object-cover rounded-lg mb-4 cursor-pointer transition-transform duration-300 hover:scale-105"
                onClick={() => openModal(pairing.image)}
              />
              <h3 className="text-xl font-semibold mb-3">{pairing.wine}</h3>
              <p className="text-sm">{pairing.foods}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div
          className="modal fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 transition-opacity duration-300"
          onClick={closeModal} // Close the modal when clicking outside
        >
          <div
            className="modal-content bg-gradient-to-b from-gray-800 to-gray-900 p-8 rounded-lg relative max-w-3xl mx-4 shadow-lg"
            onClick={(e) => e.stopPropagation()} // Prevent modal closing when clicking inside the modal content
          >
            <img
              src={selectedImage}
              alt="Wine Pairing"
              className="w-auto max-h-[70vh] rounded-lg shadow-xl transition-transform duration-300 transform hover:scale-105"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default WinePairing;
