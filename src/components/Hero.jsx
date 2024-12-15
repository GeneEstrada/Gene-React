import React from "react";

const Hero = () => {
  return (
    <section id="home" className="bg-cover bg-center w-full text-white py-48" style={{ backgroundImage: 'url("public/images/bg.jpg")' }}>
      <div className="py-20">
        <h1 className="text-5xl font-bold text-center">Welcome to WineShop</h1>
        <p className="text-xl text-center mt-6">Discover the best wines for every occasion.</p>
      </div>
    </section>
  );
};

export default Hero;
