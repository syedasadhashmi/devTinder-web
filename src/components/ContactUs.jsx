import React from "react";

const ContactUs = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="mb-4">If you have any queries, feel free to contact us!</p>

      <p className="mb-4">
        For any assistance or questions, mail us at:
        <br />
        <a href="mailto:asadhashmi22@gmail.com" className="text-blue-600">
          asadhashmi22@gmail.com
        </a>
      </p>

      <p className="text-gray-600 text-sm">We’re here to help you anytime.</p>
    </div>
  );
};

export default ContactUs;
