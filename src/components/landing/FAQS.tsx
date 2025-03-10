import React from 'react';

const FAQS: React.FC = () => {
  const faqs = [
    {
      question: "What is Swahili Pothub?",
      answer: "Swahili Pothub is a platform that connects Swahili speakers with various resources and opportunities."
    },
    {
      question: "How can I join Swahili Pothub?",
      answer: "You can join Swahili Pothub by signing up on our website and creating an account."
    },
    {
      question: "Is Swahili Pothub free to use?",
      answer: "Yes, Swahili Pothub is free to use for all users."
    }
  ];

  return (
    <div>
      <h2>Frequently Asked Questions</h2>
      <ul>
        {faqs.map((faq, index) => (
          <li key={index}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQS;