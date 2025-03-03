import { useState } from "react";
import Image from "next/image";
import iconLookingForAnswers from "@/public/oc-looking-for-answers.svg"; // Update the path as needed

const faqs = [
  {
    question: "What programs and services does SwahiliPot Hub offer?",
    answer:
      "SwahiliPot Hub offers a range of programs and services, including training workshops, mentorship programs, networking events, access to co-working spaces, and maker labs. These initiatives aim to empower individuals by providing them with the necessary resources and skills to participate in the digital economy.",
  },
  {
    question: "Who can benefit from SwahiliPot Hub?",
    answer:
      "SwahiliPot Hub is open to entrepreneurs, developers, creatives, and anyone interested in technology and innovation. It caters to individuals who are looking to enhance their digital skills, collaborate on projects, and connect with like-minded individuals in the tech ecosystem.",
  },
  {
    question: "Can I visit SwahiliPot Hub as a visitor?",
    answer:
      "Yes, SwahiliPot Hub welcomes visitors who are interested in learning more about their initiatives and the local tech ecosystem. You can visit the hub to attend events, participate in workshops, or simply network with professionals in the field. SwahiliPot Hub promotes an inclusive and vibrant community where individuals can exchange ideas and explore opportunities in technology and innovation.",
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-2xl mx-auto py-10">
      <h2 className="text-2xl font-bold text-center mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b pb-4">
            <button
              className="flex justify-between items-center w-full text-left font-semibold text-lg focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <div className="mt-2 p-4 bg-blue-100 rounded">
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Bottom Section with Icon */}
      <div className="text-center mt-6">
        <div className="flex justify-center">
          <Image src={iconLookingForAnswers} alt="Looking for answers?" width={100} height={100} />
        </div>
        <p className="text-gray-600 mt-2">Still have questions?</p>
        <a href="#" className="text-blue-600 font-semibold">
          Contact our friendly support team &rarr;
        </a>
      </div>
    </section>
  );
};

export default FAQs;
