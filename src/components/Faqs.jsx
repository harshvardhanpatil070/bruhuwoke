import React, { useState } from "react";

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What shares CFDs do you offer?",
      answer:
        "We offer a wide range of share CFDs, including top global companies across multiple industries. Our platform ensures transparency and flexibility.",
    },
    {
      question: "What does it mean to trade CFD shares?",
      answer:
        "Trading CFD shares allows you to speculate on price movements without owning the underlying asset, providing leverage and flexibility.",
    },
    {
      question: "What's the difference between shares and share CFDs?",
      answer:
        "Shares represent ownership in a company, while share CFDs are contracts that track the price movements of shares without actual ownership.",
    },
    {
      question: "What is a ‘stop loss’ order & why should I use it?",
      answer:
        "A stop-loss order automatically closes a trade at a predetermined level to minimize potential losses, ensuring better risk management.",
    },
    {
      question: "How can I maximise my returns?",
      answer:
        "To maximise returns, use risk management tools, diversify your portfolio, and stay informed about market conditions and trends.",
    },
  ];

  return (
    <section className="bg-background py-12">
      <div className="container mx-auto px-6 sm:px-12 lg:px-20">
        <h2 className="text-2xl font-bold text-text mb-6">Shares FAQs</h2>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden shadow-sm"
            >
              <button
                className="w-full text-left px-6 py-4 bg-gray-100 hover:bg-gray-200 text-text font-medium focus:outline-none flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <span>{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 text-gray-700 bg-gray-50">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;