import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What is Eating Psychology Coaching?",
    answer: "Eating Psychology Coaching is a holistic approach that explores the psychological, emotional, and behavioral aspects of your relationship with food. Unlike traditional dieting, we focus on understanding and transforming your relationship with food, body image, and self-care."
  },
  {
    question: "How long does it take to see results?",
    answer: "Every journey is unique, but most clients begin experiencing shifts in their relationship with food within the first few sessions. Lasting transformation typically requires consistent work over 3-6 months, which is why our packages are structured to support long-term change."
  },
  {
    question: "Do you provide meal plans?",
    answer: "Instead of prescriptive meal plans, we focus on developing your internal wisdom about food choices. You'll learn to trust your body's signals and make food choices that honor both your physical and emotional well-being."
  },
  {
    question: "Is this covered by insurance?",
    answer: "While our services are not typically covered by insurance, we can provide documentation for FSA/HSA reimbursement. Many clients find the investment in their well-being brings value that extends far beyond food and body image."
  },
  {
    question: "What happens in a typical session?",
    answer: "Sessions are 50 minutes long and can include discussion, practical exercises, and exploration of patterns and beliefs. We'll work together to identify challenges, develop strategies, and create sustainable changes in your relationship with food."
  },
  {
    question: "How are sessions conducted?",
    answer: "All sessions are conducted via secure video conferencing, allowing you to engage in the process from the comfort of your own space. This format provides flexibility while maintaining the personal connection essential for this work."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our approach and process.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full flex items-center justify-between p-6 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors duration-200"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-left font-semibold">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-purple-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-purple-600" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="p-6 bg-white border border-purple-100 rounded-b-lg">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;