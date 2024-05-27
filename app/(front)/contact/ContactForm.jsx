"use client";
import React, { useState } from "react";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      name: String(e.target.name.value),
      email: String(e.target.email.value),
      message: String(e.target.message.value),
    };
    const response = await fetch("/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    console.log(formData);

    if (response.ok) {
      console.log("Message sent successfully");
      setLoading(false);
      e.target.reset();
    }
    if (!response.ok) {
      setLoading(false);
      console.log("Error sending message");
    }
  };

  return (
    // <form onSubmit={handleSubmit}>
    <form action="https://formsubmit.co/remmi755@gmail.com" method="POST">
      <div className="flex flex-col mt-2 gap-2">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          className="p-2 border border-gray-400 rounded-md"
        />
      </div>

      <div className="flex flex-col mt-2 gap-2">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          className="p-2 border border-gray-400 rounded-md"
        />
      </div>

      <div className="flex flex-col mt-2 gap-2">
        <label htmlFor="message">Message</label>
        <textarea
          rows={4}
          id="message"
          name="message"
          placeholder="Enter your message"
          className="p-2 border border-gray-400 rounded-md"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="mt-4 bg-[#ffba00] text-black py-2 px-4 rounded-md flex justify-center w-full disabled:bg-gray-300 disabled:text-gray-100"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
