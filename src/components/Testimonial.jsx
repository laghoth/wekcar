import React from "react";
import { assets } from "../assets/assets";
import Title from "./Title";

const Testimonial = () => {
  const testimonials = [
    {
      name: "Othmane Laghlimi",
      location: "Marrakech, Morocco",
      image: assets.testimonial_image_1,
      testimonial:
        "Exceptional service and attention to detail. Everything was handled professionally and efficiently from start to finish. Highly recommended!",
    },

    {
      name: "Mohammed Laghlimi",
      location: "Marraech, Morocco",
      image: assets.testimonial_image_1,
      testimonial:
        "Exceptional service and attention to detail. Everything was handled professionally and efficiently from start to finish. Highly recommended!",
    },

    {
      name: "Hanane Laghlimi",
      location: "Casablanc, Morocco",
      image: assets.testimonial_image_1,
      testimonial:
        "Exceptional service and attention to detail. Everything was handled professionally and efficiently from start to finish. Highly recommended!",
    },
  ];

  return (
    <div className="py-28 px-6 md:px-16 lg:px-24 bg-light">
      <Title
        title="What Our Customers Say"
        subTitle="Discover why discerning travelers choose StayVenture for their luxury accommodations around the world."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-18">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg max-w-xs hover:translate-y-1 transition-all duration-500"
          >
            <div className="flex items-center gap-3">
              <img
                className="w-12 h-12 rounded-full"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <div>
                <p className="text-xl">{testimonial.name}</p>
                <p className="text-gray-500">{testimonial.location}</p>
              </div>
            </div>
            <div className="flex items-center gap-1 mt-4">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <img
                    key={index}
                    src={assets.star_icon}
                    alt="star-icon"
                    className="w-4 h-4"
                  />
                ))}
            </div>
            <p className="text-gray-500 max-w-90 mt-4">
              "{testimonial.testimonial}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
