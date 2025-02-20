import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import mes from "../assets/message.gif";
import { toast } from "react-toastify";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(
      "Thank you for your submission! We will get back to you soon."
    );
    setFormData({
      email: "",
      message: "",
    });

    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <section className="py-20 px-6 text-center">
        <div className="flex justify-center items-center gap-9 my-4 ">
          <img
            src={mes}
            alt="Example GIF"
            className="mt-6 rounded-lg shadow-md h-23"
          />
          <h1 className="text-4xl font-bold mb-6 mt-7">Contact Us</h1>
        </div>

        <p className="text-lg mb-7">
          We would love to hear from you! Feel free to send us your queries or
          suggestions.
        </p>

        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-white p-9 rounded-2xl shadow-xl"
        >
          {/* Name Input */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-semibold mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-120 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-semibold mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-120 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Message Input */}
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-lg font-semibold mb-2"
            >
              Your Query / Suggestion
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-120 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-120 bg-blue-600 text-white py-3 rounded-lg text-lg hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </section>
      <Footer />
    </div>
  );
};

export default ContactUs;
