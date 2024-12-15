// src/components/Testimonials.jsx
import React from "react";

const Testimonials = () => {
  const reviews = [
    {
      name: "John Doe",
      review: "I absolutely love the red wine! It's perfect for my gatherings.",
      rating: 5,
    },
    {
      name: "Jane Smith",
      review: "The white wine selection is fantastic. Definitely coming back for more.",
      rating: 4,
    },
    {
      name: "Carlos Cruz",
      review: "Best sparkling wine I've ever had! Great for celebrations.",
      rating: 5,
    },
  ];

  return (
    <section className="testimonials py-10 px-8 pt-[15%] mt-8 h-screen bg-gray-800">
      <div className="max-w-6xl mx-auto text-center text-white">
        <h2 className="text-3xl font-semibold mb-5">What Our Customers Say</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="testimonial bg-gray-900 p-5 rounded-lg">
              <p className="text-sm italic mb-4">"{review.review}"</p>
              <p className="text-lg font-semibold">{review.name}</p>
              <p className="text-yellow-400">{"⭐".repeat(review.rating)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
