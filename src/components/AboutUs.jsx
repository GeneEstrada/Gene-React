import React from "react";

const AboutUs = () => {
  return (
    <section
      id="about" // Add this id for proper navigation
      className="about-us bg-gray-900 text-white py-10 px-5 pt-[15%] mt-8 h-screen"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-5">About Us</h2>
        <p className="text-lg leading-relaxed">
          Welcome to WineShop, your ultimate destination for the finest wines.
          Our passion lies in delivering exceptional quality and unparalleled
          flavors. With a carefully curated collection from around the world,
          we bring you an experience that celebrates the art of winemaking. Join
          us in savoring the taste of excellence and indulging in moments of joy.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
