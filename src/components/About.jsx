import React from "react";
import about from "../assets/images/ab.jpg";

const About = () => {
  return (
    <section className="bg-background py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary">About Namokar Engineering</h1>
          <p className="mt-4 text-lg text-text">
          Where Percision Meets Performance 
          </p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative">
            <img
              src={about}
              alt="About Us"
              className="rounded-lg shadow-lg"
            />
            <div className="absolute top-4 left-4 bg-primary text-white px-4 py-2 rounded-full text-sm shadow-md">
              Since 1996
            </div>
          </div>

          {/* Text Section */}
          <div>
            <h2 className="text-3xl font-semibold text-primary mb-6">
              Who We Are
            </h2>
            <p className="text-text mb-6">
            

Since 1996, Namokar Engineering has been a trusted leader in delivering precision components tailored to the needs of steel manufacturing plants. Guided by the vision and values of our founder, Pramod Mahajan, we prioritize quality, reliability, and innovation in everything we do.

Our team of skilled and dedicated professionals ensures every product meets the highest standards, reflecting our unwavering commitment to precision and excellence. 
            </p>
            <p className="text-text mb-6">
            We take pride in delivering solutions on time, every time, to empower the steel manufacturing industry to achieve its goals.

With decades of experience, we remain steadfast in our mission to drive efficiency and growth for our clients, setting new benchmarks in the industry.
            </p>
           
            <div className="mt-4">
              <button className="bg-primary text-white px-6 py-3 rounded-md font-semibold hover:bg-accent transition">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-semibold text-primary text-center mb-8">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-primary mb-4">
                Innovation
              </h3>
              <p className="text-sm text-text">
                Constantly pushing the boundaries to deliver modern and efficient
                trading tools.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-primary mb-4">
                Security
              </h3>
              <p className="text-sm text-text">
                Your safety is our priority. We use industry-leading practices
                to secure your assets.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-primary mb-4">
                Accessibility
              </h3>
              <p className="text-sm text-text">
                Designed to be intuitive and easy to use for traders of all levels.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;