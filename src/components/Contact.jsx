import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-background min-h-screen flex items-center py-16">
      <div className="container mx-auto px-6 sm:px-12 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-primary mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-text">
            We'd love to hear from you! Reach out to us with any questions or
            inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white shadow-lg rounded-lg p-8">
            <form
              action="https://formsubmit.co/reallydotin@gmail.com"
              method="POST"
              className="space-y-6"
            >
              {/* Disable CAPTCHA */}
              <input type="hidden" name="_captcha" value="false" />

              {/* Redirect to Thank You Page */}
              <input
                type="hidden"
                name="_next"
                value="https://zestcapital.com"
              />

              {/* Updated Form Fields */}
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-text"
                >
                  Name of Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Enter company name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/50"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="contactPerson"
                  className="block text-sm font-medium text-text"
                >
                  Name of Contact Person
                </label>
                <input
                  type="text"
                  id="contactPerson"
                  name="contactPerson"
                  placeholder="Enter contact person name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/50"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-text"
                >
                  Tel. No. / Cell No.
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Enter phone number"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/50"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-text"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/50"
                  required
                />
              </div>

              {/* Country Dropdown */}
              <div>
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-text"
                >
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/50"
                  required
                >
                  <option value="">Select a country</option>
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                  <option value="UK">UK</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-text"
                >
                  Address / City / Location
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Enter address"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/50"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="requirements"
                  className="block text-sm font-medium text-text"
                >
                  Requirements Details
                </label>
                <textarea
                  id="requirements"
                  name="requirements"
                  rows="4"
                  placeholder="Enter requirement details"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/50"
                  required
                ></textarea>
              </div>

             
            

              

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 px-6 text-white bg-primary rounded-md shadow hover:bg-primary-dark transition-all"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Contact Information Section */}
          <div className="flex flex-col justify-center bg-primary text-white rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <p className="mb-4">
              Feel free to reach out to us via the following contact details.
            </p>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold">Email</h4>
                <p>info@namokarengineering.com</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold">Phone</h4>
                <p>+91 9673872411 / 9762263499</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold">Address</h4>
                <p>
                  Plot No 31, Swami Vivekanand Industrial Estate, Handewadi
                  Road, Hadapsar, Pune-411028
                </p>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold">Follow Us</h4>
              <div className="flex space-x-6 mt-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  <FaFacebook size={28} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  <FaTwitter size={28} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  <FaInstagram size={28} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  <FaLinkedin size={28} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 