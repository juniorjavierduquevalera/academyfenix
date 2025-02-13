"use client";
import React from "react";
import {
  FaCalendarAlt,
  FaBuilding,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const EventDetails = () => {
  return (
    <section className="bg-gray-900 text-white py-6 px-4 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 text-center">
        <div className="flex items-center justify-center gap-3 md:gap-4">
          <FaCalendarAlt className="text-4xl md:text-5xl text-white" />
          <p className="text-lg md:text-xl font-semibold whitespace-nowrap">
            00 MES 2024
          </p>
        </div>
        <div className="flex items-center justify-center gap-3 md:gap-4">
          <FaBuilding className="text-4xl md:text-5xl text-white" />
          <p className="text-lg md:text-xl font-semibold whitespace-nowrap">
            Por confirmar
          </p>
        </div>
        <div className="flex items-center justify-center gap-3 md:gap-4">
          <FaMapMarkerAlt className="text-4xl md:text-5xl text-white" />
          <p className="text-lg md:text-xl font-semibold whitespace-nowrap">
            Por confirmar
          </p>
        </div>
        <div className="flex items-center justify-center gap-3 md:gap-4">
          <FaClock className="text-4xl md:text-5xl text-white" />
          <p className="text-lg md:text-xl font-semibold whitespace-nowrap">
            00:00 PM
          </p>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
