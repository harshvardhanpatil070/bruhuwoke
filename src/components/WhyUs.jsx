import React from 'react';

const WhyUs = () => {
  return (
    <section className="bg-background py-16 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-primary mb-8">Why Choose Us?</h2>
        <p className="text-base sm:text-lg text-text mb-12">Here are a few reasons why our customers love working with us.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {/* Reason 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8">
            <div className="mb-6">
              <div className="w-12 sm:w-16 h-12 sm:h-16 bg-primary text-white flex items-center justify-center rounded-full">
                <span className="text-lg sm:text-2xl">1</span>
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-primary mb-4">Latest Technology</h3>
            <p className="text-sm sm:text-base text-text">Harnessing cutting-edge innovations for optimized manufacturing processes.</p>
          </div>

          {/* Reason 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8">
            <div className="mb-6">
              <div className="w-12 sm:w-16 h-12 sm:h-16 bg-primary text-white flex items-center justify-center rounded-full">
                <span className="text-lg sm:text-2xl">2</span>
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-primary mb-4">Sophisticated Machines</h3>
            <p className="text-sm sm:text-base text-text">Precision-engineered equipment ensuring unmatched quality and efficiency.</p>
          </div>

          {/* Reason 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8">
            <div className="mb-6">
              <div className="w-12 sm:w-16 h-12 sm:h-16 bg-primary text-white flex items-center justify-center rounded-full">
                <span className="text-lg sm:text-2xl">3</span>
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-primary mb-4">Enriched Experience</h3>
            <p className="text-sm sm:text-base text-text">Delivering exceptional value through decades of industry expertise.</p>
          </div>

          {/* Reason 4 */}
          <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8">
            <div className="mb-6">
              <div className="w-12 sm:w-16 h-12 sm:h-16 bg-primary text-white flex items-center justify-center rounded-full">
                <span className="text-lg sm:text-2xl">4</span>
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-primary mb-4">Dedicated and Skilled Staff</h3>
            <p className="text-sm sm:text-base text-text">A committed team of experts driving excellence at every stage.</p>
          </div>

          {/* Reason 5 */}
          <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8">
            <div className="mb-6">
              <div className="w-12 sm:w-16 h-12 sm:h-16 bg-primary text-white flex items-center justify-center rounded-full">
                <span className="text-lg sm:text-2xl">5</span>
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-primary mb-4">Market Knowledge</h3>
            <p className="text-sm sm:text-base text-text">Deep insights into industry trends to stay ahead of the curve.</p>
          </div>

          {/* Reason 6 */}
          <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8">
            <div className="mb-6">
              <div className="w-12 sm:w-16 h-12 sm:h-16 bg-primary text-white flex items-center justify-center rounded-full">
                <span className="text-lg sm:text-2xl">6</span>
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-primary mb-4">Customer-Centric Approach</h3>
            <p className="text-sm sm:text-base text-text">Building long-term partnerships through reliable and personalized services.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;