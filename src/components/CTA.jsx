import React from "react";

const CTA = () => {
  return (
    <section id="cta" className="cta bg-black text-white py-10 text-center">
      <h2 className="text-3xl font-semibold mb-5">Join Our Wine Lovers Club</h2>
      <p className="text-xl mb-5">
        Get exclusive offers, wine tasting invites, and the latest updates right in your inbox.
      </p>
      <button className="bg-gray-800 text-white py-2 px-6 rounded-lg hover:bg-gray-700">
        Sign Up Now
      </button>
    </section>
  );
};

export default CTA;
